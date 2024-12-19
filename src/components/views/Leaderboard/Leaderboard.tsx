import React, { useEffect, useState } from 'react';
import './Leaderboard.css';
import { getLeaderboard } from '../../../services/save-leaderboard.service';

interface Player {
    name: string;
    score: number;
    date: string;
}

export const LeaderboardScreen: React.FC = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getLeaderboard()
            .then(data => {
                setPlayers(data.players);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading leaderboard:', err);
                setError('Failed to load leaderboard');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
                <div className="font-press-start text-2xl text-retro-blue animate-text-flicker">
                    LOADING...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
                <div className="font-press-start text-2xl text-retro-pink animate-text-flicker">
                    ERROR LOADING SCORES
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Retro Grid Background */}
            <div className="absolute inset-0 bg-retro-grid opacity-30"></div>
            
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-retro-gradient opacity-20"></div>
            
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none animate-scanline"></div>

            <div className="relative z-10 w-full max-w-4xl">
                <div className="bg-black/50 p-8 rounded-lg border border-retro-blue/50 shadow-[0_0_20px_rgba(0,255,255,0.3)] backdrop-blur-sm">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <a 
                            href="/" 
                            className="px-6 py-3 bg-retro-pink/20 border-2 border-retro-pink text-retro-pink font-press-start text-sm rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,255,0.5)]"
                        >
                            MAIN MENU
                        </a>
                        <h1 className="font-press-start text-3xl text-white animate-neon-glow">HIGH SCORES</h1>
                        <div className="w-32"></div>
                    </div>
                    
                    {/* Leaderboard Table */}
                    <div className="bg-black/30 rounded-lg border border-retro-purple/50 shadow-[0_0_15px_rgba(153,0,255,0.2)] overflow-hidden">
                        <table className="w-full">
                            <thead className="border-b border-retro-purple/30">
                                <tr className="font-press-start text-sm">
                                    <th className="py-4 px-6 text-left text-retro-pink">#RANK</th>
                                    <th className="py-4 px-6 text-left text-retro-blue">PLAYER</th>
                                    <th className="py-4 px-6 text-right text-retro-yellow">SCORE</th>
                                    <th className="py-4 px-6 text-right text-retro-purple">DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {players.map((player, index) => (
                                    <tr 
                                        key={index} 
                                        className="border-t border-retro-purple/20 font-press-start text-sm transition-all duration-300 hover:bg-white/5"
                                    >
                                        <td className="py-4 px-6 text-retro-pink/70">#{index + 1}</td>
                                        <td className="py-4 px-6 text-white">{player.name}</td>
                                        <td className="py-4 px-6 text-right">
                                            <span className="bg-retro-yellow/20 text-retro-yellow px-4 py-1 rounded-full border border-retro-yellow/50">
                                                {player.score}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right text-retro-purple/70">
                                            {new Date(player.date).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                                {players.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="py-12 text-center font-press-start text-retro-blue animate-text-flicker">
                                            NO SCORES YET - BE THE FIRST!
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Retro Decorative Elements */}
                    <div className="flex justify-center space-x-4 mt-8">
                        <div className="w-3 h-3 bg-retro-pink animate-pulse"></div>
                        <div className="w-3 h-3 bg-retro-blue animate-pulse [animation-delay:150ms]"></div>
                        <div className="w-3 h-3 bg-retro-purple animate-pulse [animation-delay:300ms]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};