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
            <div className="flex flex-wrap justify-center gap-4">
                {[...this.state.updatedWord].map((letter, index) => (
                    <div 
                        key={index} 
                        className="w-14 h-14 flex items-center justify-center bg-black/30 border-2 border-retro-blue text-retro-blue font-press-start text-2xl shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                    >
                        {letter}
                    </div>
                ))}
                {this.state.isGameOver && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center">
                        <div className="text-center">
                            <div className="font-press-start text-4xl text-white animate-neon-glow mb-4">
                                WORD COMPLETE!
                            </div>
                            <div className="font-press-start text-retro-blue text-xl animate-text-flicker">
                                {this.state.word}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}