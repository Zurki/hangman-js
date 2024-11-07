import React from "react"
import './Game.css';
import { Hangman } from "../../molecules/Hangman/Hangman";
import { Typer } from "../../molecules/Typer/Typer";
import { WordDisplay } from "../../molecules/word-display/WordDisplay";

export class GameScreen extends React.Component {
    state = {
        typedText: "",
        lastKeyPressed: ""
    };

    handleTextChange = (newText: string) => {
        console.log(newText);
        this.setState({ 
            typedText: newText,
            lastKeyPressed: newText.slice(-1)
        });
    }

    render() { 
        return (
            <div className="home">
                <Hangman />
                <WordDisplay typedText={this.state.typedText} lastKeyPressed={this.state.lastKeyPressed} />
                <Typer typedText={this.state.typedText} onTextChange={this.handleTextChange} />
            </div>
        );
    }
}