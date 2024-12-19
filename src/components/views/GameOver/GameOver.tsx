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
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Retro Grid Background */}
            <div className="absolute inset-0 bg-retro-grid opacity-30"></div>
            
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-retro-gradient opacity-20"></div>
            
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none animate-scanline"></div>

            <div className="relative z-10 w-full max-w-xl">
                <div className="bg-black/50 p-8 rounded-lg border border-retro-pink/50 shadow-[0_0_20px_rgba(255,0,255,0.3)] backdrop-blur-sm">
                    <h1 className="font-press-start text-5xl text-white text-center mb-12 animate-neon-glow">
                        GAME OVER
                    </h1>
            
                    <div className="space-y-8 mb-8">
                        {/* Score Display */}
                        <div className="bg-black/30 p-6 rounded border border-retro-blue/50 shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                            <div className="font-press-start text-sm text-retro-blue mb-2">YOUR SCORE</div>
                            <div className="font-press-start text-4xl text-white animate-neon-glow">{score}</div>
                        </div>
              
                        {/* High Score Display */}
                        <div className="bg-black/30 p-6 rounded border border-retro-yellow/50 shadow-[0_0_15px_rgba(255,255,0,0.2)]">
                            <div className="font-press-start text-sm text-retro-yellow mb-2">HIGH SCORE</div>
                            <div className="font-press-start text-4xl text-white animate-neon-glow">{highScore}</div>
                        </div>

                        {/* Name Input */}
                        {!isSaved && (
                            <div className="bg-black/30 p-6 rounded border border-retro-purple/50 shadow-[0_0_15px_rgba(153,0,255,0.2)]">
                                <div className="font-press-start text-sm text-retro-purple mb-4">ENTER NAME</div>
                                <input
                                    type="text"
                                    value={playerName}
                                    onChange={(e) => setPlayerName(e.target.value)}
                                    className="w-full bg-black/50 text-white p-4 rounded border-2 border-retro-purple/50 focus:border-retro-purple focus:outline-none font-press-start text-lg mb-4 placeholder-retro-purple/30"
                                    placeholder="_____"
                                    maxLength={20}
                                />
                                <button
                                    onClick={handleSave}
                                    className="w-full py-4 px-6 bg-retro-green/20 border-2 border-retro-green text-retro-green font-press-start rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.5)]"
                                >
                                    SAVE SCORE
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={handleRestart}
                            className="w-full py-4 px-6 bg-retro-blue/20 border-2 border-retro-blue text-retro-blue font-press-start rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                        >
                            PLAY AGAIN
                        </button>
              
                        <button
                            onClick={handleMainMenu}
                            className="w-full py-4 px-6 bg-retro-pink/20 border-2 border-retro-pink text-retro-pink font-press-start rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,255,0.5)]"
                        >
                            MAIN MENU
                        </button>
                    </div>

                    {/* Success Message */}
                    {isSaved && (
                        <div className="mt-6 text-center font-press-start text-retro-green animate-text-flicker">
                            SCORE SAVED!
                        </div>
                    )}

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

export default GameOver;
