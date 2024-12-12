import React, { Component } from "react";
import { getWord } from "../../../services/word.service";

interface WordDisplayProps {
    typedText: string;
    lastKeyPressed: string;
    onWrongGuess: (isWrongGuess: boolean) => void;
}

export class WordDisplay extends Component<WordDisplayProps> {
    state = {
        word: getWord(3, 10),
        updatedWord: "",
        isGameOver: false,
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
        this.props.onWrongGuess(this.state.word.includes(key) ? false : true);
    }

    render() {
        return (
            <div className="flex flex-wrap justify-center gap-3 w-full max-w-2xl">
                {[...this.state.updatedWord].map((letter, index) => (
                    <div 
                        key={index} 
                        className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-lg shadow-lg text-2xl font-bold text-white transform transition-all duration-200 hover:scale-105"
                    >
                        {letter}
                    </div>
                ))}
                {this.state.isGameOver && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-4xl font-bold text-green-500 animate-bounce">
                            Word Completed!
                        </div>
                    </div>
                )}
            </div>
        );
    }
}