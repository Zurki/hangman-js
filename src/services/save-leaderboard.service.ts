declare global {
    interface Window {
        showSaveFilePicker: (options?: {
            suggestedName?: string;
            types?: Array<{
                description: string;
                accept: Record<string, string[]>;
            }>;
        }) => Promise<FileSystemFileHandle>;
    }
}

interface Player {
    name: string;
    score: number;
    date: string;
}

interface LeaderboardData {
    players: Player[];
}

const LEADERBOARD_PATH = '/src/data/leaderboard.json';

export async function saveScore(player: Player): Promise<void> {
    try {
        // Get the file handle
        const fileHandle = await window.showSaveFilePicker({
            suggestedName: 'leaderboard.json',
            types: [{
                description: 'JSON Files',
                accept: {'application/json': ['.json']},
            }],
        });
        
        // Read the current leaderboard
        const file = await fileHandle.getFile();
        const data: LeaderboardData = JSON.parse(await file.text());
        
        // Add new player
        data.players.push(player);
        
        // Sort by score (highest first)
        data.players.sort((a, b) => b.score - a.score);
        
        // Create a writable stream and write the updated data
        const writable = await fileHandle.createWritable();
        await writable.write(JSON.stringify(data, null, 2));
        await writable.close();
        
        console.log('Score saved:', player);
    } catch (error) {
        console.error('Error saving score:', error);
        throw error;
    }
}

export async function getLeaderboard(): Promise<LeaderboardData> {
    try {
        const response = await fetch(LEADERBOARD_PATH);
        if (!response.ok) {
            throw new Error('Failed to load leaderboard');
        }
        return response.json();
    } catch (error) {
        console.error('Error loading leaderboard:', error);
        return { players: [] };
    }
}

export async function getHighScore(): Promise<number> {
    try {
        const data = await getLeaderboard();
        return data.players.reduce((max, player) => 
            player.score > max ? player.score : max, 0);
    } catch (error) {
        console.error('Error getting high score:', error);
        return 0;
    }
}
