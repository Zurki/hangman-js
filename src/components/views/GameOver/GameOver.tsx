import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { saveScore, getHighScore } from '../../../services/save-leaderboard.service';

const GameOver: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [playerName, setPlayerName] = useState('');
    const [isSaved, setIsSaved] = useState(false);
    const [highScore, setHighScore] = useState(0);

    const score = Number(searchParams.get('score')) || 0;

    useEffect(() => {
        // Get the high score on component mount
        getHighScore().then(setHighScore);
    }, []);

    const handleSave = async () => {
        if (!playerName.trim()) {
            alert('Please enter your name');
            return;
        }

        try {
            const newPlayer = {
                name: playerName.trim(),
                score: score,
                date: new Date().toISOString()
            };
            
            await saveScore(newPlayer);
            setIsSaved(true);
            setTimeout(() => navigate('/leaderboard'), 1500);
        } catch (error) {
            console.error('Error saving score:', error);
            alert('Failed to save score. Please try again.');
        }
    };

    const handleRestart = () => {
        navigate('/game');
    };

    const handleMainMenu = () => {
        navigate('/');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md mx-4 transform animate-fadeIn">
                <h1 className="text-5xl font-bold text-center mb-8 text-red-500 animate-bounce">
                    Game Over
                </h1>
        
                <div className="space-y-4 mb-8">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-gray-400 text-sm">Your Score</p>
                        <p className="text-3xl font-bold text-white">{score}</p>
                    </div>
          
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-gray-400 text-sm">High Score</p>
                        <p className="text-3xl font-bold text-yellow-500">{highScore}</p>
                    </div>

                    {!isSaved && (
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <p className="text-gray-400 text-sm mb-2">Enter Your Name</p>
                            <input
                                type="text"
                                value={playerName}
                                onChange={(e) => setPlayerName(e.target.value)}
                                className="w-full bg-gray-700 text-white p-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                                placeholder="Your name..."
                                maxLength={20}
                            />
                            <button
                                onClick={handleSave}
                                className="w-full mt-2 py-2 px-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-200"
                            >
                                Save Score
                            </button>
                        </div>
                    )}
                </div>

                <div className="space-y-3">
                    <button
                        onClick={handleRestart}
                        className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                        Play Again
                    </button>
          
                    <button
                        onClick={handleMainMenu}
                        className="w-full py-3 px-6 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                        Main Menu
                    </button>
                </div>

                {isSaved && (
                    <div className="mt-4 text-center text-green-500 font-semibold animate-pulse">
                        Score saved successfully!
                    </div>
                )}
            </div>
        </div>
    );
};

export default GameOver;
