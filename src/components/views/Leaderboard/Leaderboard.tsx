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
            <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center">
                <div className="text-white text-2xl">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center">
                <div className="text-red-500 text-2xl">{error}</div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-2xl mx-4">
                <div className="flex justify-between items-center mb-8">
                    <a href="/" className="py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700">
                        Home
                    </a>
                    <h1 className="text-4xl font-bold text-blue-500">Leaderboard</h1>
                    <div className="w-20"></div>
                </div>
                
                <div className="overflow-hidden rounded-xl border border-gray-700">
                    <table className="min-w-full">
                        <thead className="bg-gray-800">
                            <tr>
                                <th className="py-4 px-6 text-left text-gray-300">Rank</th>
                                <th className="py-4 px-6 text-left text-gray-300">Name</th>
                                <th className="py-4 px-6 text-right text-gray-300">Score</th>
                                <th className="py-4 px-6 text-right text-gray-300">Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-900">
                            {players.map((player, index) => (
                                <tr key={index} className="border-t border-gray-800 hover:bg-gray-800">
                                    <td className="py-4 px-6 text-gray-400">#{index + 1}</td>
                                    <td className="py-4 px-6 text-white">{player.name}</td>
                                    <td className="py-4 px-6 text-right">
                                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
                                            {player.score}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right text-gray-400">
                                        {new Date(player.date).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                            {players.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="py-8 text-center text-gray-400">
                                        No scores yet. Be the first to play!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};