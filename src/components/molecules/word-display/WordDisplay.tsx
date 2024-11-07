import React, { Component } from "react";

export class WordDisplay extends Component<{ word: string, onLetterClick: (letter: string) => void }> {
    render() {
        return (
            <div className="word-display">
                {[...this.props.word].map((letter, index) => (
                    <div key={index} className="word-display-word" onClick={() => this.props.onLetterClick(letter)}>
                        {letter}
                    </div>
                ))}
            </div>
        );
    }
}