import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ViteExpress from 'vite-express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const LEADERBOARD_PATH = path.join(__dirname, 'public', 'leaderboard.json');

// Middleware to parse JSON bodies
app.use(express.json());

// Get leaderboard
app.get('/api/leaderboard', async (req, res) => {
    try {
        const fileContent = await fs.readFile(LEADERBOARD_PATH, 'utf-8');
        res.json(JSON.parse(fileContent));
    } catch (error) {
        console.error('Error reading leaderboard:', error);
        res.status(500).json({ error: 'Failed to read leaderboard' });
    }
});

// Save score
app.post('/api/leaderboard/save', async (req, res) => {
    try {
        const newPlayer = req.body;
        
        // Read current leaderboard
        let data;
        try {
            const fileContent = await fs.readFile(LEADERBOARD_PATH, 'utf-8');
            data = JSON.parse(fileContent);
        } catch {
            // If file doesn't exist or is corrupted, start with empty leaderboard
            data = { players: [] };
        }
        
        // Add new player
        data.players.push(newPlayer);
        
        // Sort by score (highest first)
        data.players.sort((a, b) => b.score - a.score);
        
        // Write back to file
        await fs.writeFile(LEADERBOARD_PATH, JSON.stringify(data, null, 4));
        
        res.json({ success: true });
    } catch (error) {
        console.error('Error saving score:', error);
        res.status(500).json({ error: 'Failed to save score' });
    }
});

// Start server
const port = process.env.PORT || 3000;
ViteExpress.listen(app, port, () => {
    console.log(`Server is running on port ${port}`);
}); 