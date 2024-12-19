import React from "react";
import Hangman1 from '/hangman1.png';
import Hangman2 from '/hangman2.png';
import Hangman3 from '/hangman3.png';
import Hangman4 from '/hangman4.png';
import Hangman5 from '/hangman5.png';
import Hangman6 from '/hangman6.png';
import './Hangman.css';

interface HangmanProps {
    wrongLetterCount: number;
}

export class Hangman extends React.Component<HangmanProps> {
    getHangmanImage = (wrongLetterCount: number) => {
        switch (wrongLetterCount) {
        case 1:
            return Hangman1;
        case 2:
            return Hangman2;
        case 3:
            return Hangman3;
        case 4:
            return Hangman4;
        case 5:
            return Hangman5;
        case 6:
            return Hangman6;
        default:
            return;
        }
    }

    render() {
        const { wrongLetterCount } = this.props;
        const currentImage = this.getHangmanImage(wrongLetterCount);
        
        return (
            <div className="mb-6">
                <div
                    className={`
                            bg-black/30 p-6 rounded-full border-2 
                        ${wrongLetterCount > 0 ? 'border-retro-pink' : 'border-retro-purple'} 
                        shadow-[0_0_20px_rgba(153,0,255,0.3)] 
                        transition-all duration-300 
                        hover:shadow-[0_0_30px_rgba(153,0,255,0.5)] 
                        group relative
                        ${wrongLetterCount > 0 ? 'animate-pulse' : ''}
                `}>
                    {currentImage && (
                        <img
                            src={currentImage} 
                            alt={`Hangman State ${wrongLetterCount}`} 
                            className={`
                                w-24 h-24 object-contain 
                                filter brightness-150 contrast-125 
                                animate-float group-hover:scale-110 
                                transition-transform duration-300
                                ${wrongLetterCount > 0 ? 'drop-shadow-[0_0_8px_rgba(255,0,255,0.6)]' : ''}
                            `}
                        />
                    )}
                    {!currentImage && (
                        <div className="w-24 h-24" />
                    )}
                </div>
            </div>
        );
    }
}