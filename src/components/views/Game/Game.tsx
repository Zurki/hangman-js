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
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex flex-col items-center justify-center p-8">
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-4xl mx-4">
                <div className="flex flex-col items-center space-y-8">
                    <Hangman />
                    <WordDisplay 
                        typedText={typedText} 
                        lastKeyPressed={lastKeyPressed} 
                        onWrongGuess={handleWrongGuess} 
                    />
                    <Typer 
                        typedText={typedText} 
                        onTextChange={handleTextChange} 
                    />
                    <div className="text-2xl font-bold text-red-500">Wrong Guesses: {wrongGuesses}</div>
                </div>
            </div>
        </div>
    );
};

export default GameScreen;