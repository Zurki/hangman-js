import React, { Component } from "react";
import { getWord } from "../../../services/word.service";

interface WordDisplayProps {
    typedText: string;
    lastKeyPressed: string;
}

export class WordDisplay extends Component<WordDisplayProps> {
    state = {
        word: getWord(3, 10),
        updatedWord: "",
        isGameOver: false
    };

    componentDidMount() {
        this.setState({ updatedWord: this.state.word.split('').map(() => '_').join('') });
    }

    componentDidUpdate(prevProps: WordDisplayProps) {
        if (prevProps.lastKeyPressed !== this.props.lastKeyPressed) {
            this.flipLetter(this.props.lastKeyPressed);
        }

        if(this.state.isGameOver){
            this.setState({ word: getWord(3, 10) });
            this.setState({ updatedWord: this.state.word.split('').map(() => '_').join('') });
            this.setState({ isGameOver: false });
            this.render();
        }
    }

    flipLetter(key: string) {

        console.log(this.state.word)
        const updatedWord = this.state.word.split('').map((letter, index): string => {
            if(this.state.updatedWord[index] != '_'){
                return this.state.updatedWord[index];
            }

            return letter.toLowerCase() === key.toLowerCase() ? letter : '_'
        }).join('');
        this.setState({ updatedWord });
        this.setState({ isGameOver: updatedWord === this.state.word });
    }

    render() {
        return (
            <div className="word-display flex">
                {[...this.state.updatedWord].map((letter, index) => (
                    <div key={index} className="word-display-word flex-1 p-2 border border-white text-white">
                        {letter}
                    </div>
                ))}
                {this.state.isGameOver && <div className="text-white">Game Over</div>}
            </div>
        );
    }
}