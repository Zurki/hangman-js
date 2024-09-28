import React from "react"
import './Game.css';
import { Hangman } from "../../molecules/Hangman/Hangman";

export class GameScreen extends React.Component {
    render() { 
        return (
            <div className="home">
                <Hangman />
            </div>
        );
    }
}