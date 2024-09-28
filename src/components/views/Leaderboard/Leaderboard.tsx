import React from 'react';

import './Leaderboard.css';

interface Player {
    name: string;
    score: number;
}

const samplePlayers: Player[] = [
    { name: 'Alice', score: 120 },
    { name: 'Bob', score: 100 },
    { name: 'Charlie', score: 80 },
];

export class LeaderboardScreen extends React.Component {
    render() {
        return (
            <div className="leaderboard">
                <div className="container mx-auto p-4">
                    <div className='flex content-center justify-center'>
                        <div className="flex justify-between items-center w-full">
                            <a href="/" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-10">Home</a>
                            <h1 className="text-2xl font-bold mb-4 text-white text-center flex-grow">Leaderboard</h1>
                        </div>
                    </div>
                    <table className="min-w-full bg-gray-950">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b border-black text-white">Name</th>
                                <th className="py-2 px-4 border-b border-black text-white">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {samplePlayers.map((player, index) => (
                                <tr key={index} className="text-center">
                                    <td className="py-2 px-4 border-b border-black text-white">{player.name}</td>
                                    <td className="py-2 px-4 border-b border-black text-white">{player.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}