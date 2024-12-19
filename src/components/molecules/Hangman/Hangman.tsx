import React from "react";
import HangmanImg from '/catch.png';
import './Hangman.css';

export class Hangman extends React.Component {
    render() {
        return (
            <div className="mb-6">
                <div className="bg-black/30 p-6 rounded-full border-2 border-retro-purple shadow-[0_0_20px_rgba(153,0,255,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(153,0,255,0.5)] group">
                    <img 
                        src={HangmanImg} 
                        alt="Hangman" 
                        className="w-24 h-24 object-contain filter brightness-150 contrast-125 animate-float group-hover:scale-110 transition-transform duration-300" 
                    />
                </div>
            </div>
        );
    }
}