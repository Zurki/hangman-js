import React from "react";
import HangmanImg from '/catch.png';
import './Hangman.css';

export class Hangman extends React.Component {
    render() {
        return (
            <div className="hangman">
                <img src={ HangmanImg } alt="Hangman" className="image" />
            </div>
        );
    }
}