import React from "react";
import HangmanImg from '/catch.png';
import './Hangman.css';

export class Hangman extends React.Component {
    render() {
        return (
            <div className="mb-8">
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-full shadow-lg border border-gray-700 transform transition-all duration-200 hover:scale-105">
                    <img src={HangmanImg} alt="Hangman" className="w-24 h-24 object-contain" />
                </div>
            </div>
        );
    }
}