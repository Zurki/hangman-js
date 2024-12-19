import React, { useState } from "react";
import './Game.css';
import { Hangman } from "../../molecules/Hangman/Hangman";
import { Typer } from "../../molecules/Typer/Typer";
import { WordDisplay } from "../../molecules/word-display/WordDisplay";
import { useNavigate } from "react-router-dom";

export const GameScreen: React.FC = () => {
    const navigate = useNavigate();

    const [typedText, setTypedText] = useState("");
    const [lastKeyPressed, setLastKeyPressed] = useState("");
    const [wrongGuesses, setWrongGuesses] = useState(0);
    const [score, setScore] = useState(0);
    const highScore = 150;

    const handleTextChange = (newText: string) => {
        console.log(newText);
        setTypedText(newText);
        setLastKeyPressed(newText.slice(-1));
    };

    const handleWrongGuess = (isWrongGuess: boolean) => {
        if (isWrongGuess) {
            setWrongGuesses(prev => prev + 1);
        }

        if (!isWrongGuess) {
            setScore(prev => prev + 10);
        }

        if (wrongGuesses >= 6) {
            navigate(`/game-over?score=${score}&highScore=${highScore}`);
            console.log('Game Over');
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Retro Grid Background */}
            <div className="absolute inset-0 bg-retro-grid opacity-30"></div>
            
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-retro-gradient opacity-20"></div>
            
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none animate-scanline"></div>

            <div className="relative z-10 w-full max-w-4xl">
                {/* Score Display */}
                <div className="bg-black/50 rounded-lg border border-retro-pink/50 shadow-[0_0_20px_rgba(255,0,255,0.3)] backdrop-blur-sm p-4 mb-6 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <div className="text-center">
                            <div className="text-retro-blue font-press-start text-xs mb-2">SCORE</div>
                            <div className="text-2xl font-press-start text-white animate-neon-glow">{score}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-retro-pink font-press-start text-xs mb-2">LIVES</div>
                            <div className="text-2xl font-press-start text-white animate-neon-glow">{6 - wrongGuesses}/6</div>
                        </div>
                    </div>
                    <a 
                        href="/" 
                        className="px-4 py-2 bg-retro-purple/20 border border-retro-purple text-retro-purple font-press-start text-sm rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(153,0,255,0.5)]"
                    >
                        EXIT
                    </a>
                </div>

                {/* Game Content */}
                <div className="bg-black/50 rounded-lg border border-retro-blue/50 shadow-[0_0_20px_rgba(0,255,255,0.3)] backdrop-blur-sm p-8">
                    <div className="flex flex-col items-center space-y-8">
                        <div className="bg-black/50 p-6 rounded-lg border border-retro-pink/30">
                            <Hangman wrongLetterCount={wrongGuesses} />
                        </div>

                        <div className="w-full max-w-2xl">
                            <WordDisplay 
                                typedText={typedText} 
                                lastKeyPressed={lastKeyPressed} 
                                onWrongGuess={handleWrongGuess} 
                            />
                        </div>

                        <div className="w-full max-w-2xl">
                            <Typer 
                                typedText={typedText} 
                                onTextChange={handleTextChange} 
                            />
                        </div>

                        {/* Retro Decorative Elements */}
                        <div className="flex justify-center space-x-4 mt-4">
                            <div className="w-2 h-2 bg-retro-pink animate-pulse"></div>
                            <div className="w-2 h-2 bg-retro-blue animate-pulse [animation-delay:150ms]"></div>
                            <div className="w-2 h-2 bg-retro-purple animate-pulse [animation-delay:300ms]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameScreen;