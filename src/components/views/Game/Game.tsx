import React from "react"
import './Game.css';
import { Hangman } from "../../molecules/Hangman/Hangman";
import { Typer } from "../../molecules/Typer/Typer";

export class GameScreen extends React.Component {
    getTyperState = () => {
        return {
            typedText: ""
        };
    }

    render() { 
        return (
            <div className="home">
                <Hangman />
                <Typer />
            </div>
        );
    }
}