import React, { Component } from "react";

interface TyperState {
    typedText: string;
}

interface TyperProps {
    typedText: string;
    onTextChange: (newText: string) => void;
}

export class Typer extends Component<TyperProps, TyperState> {
    constructor(props: TyperProps) {
        super(props);
        this.state = {
            typedText: ""
        };
    }

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (event: KeyboardEvent) => {
        if (event.key.length === 1 && /[a-zA-Z]/.test(event.key)) {
            const newText = event.key;
            this.props.onTextChange(newText);
        }
    };

    render() {
        return (
            <div className="w-full">
                <div className="bg-black/30 p-6 rounded-lg border border-retro-pink/50 shadow-[0_0_20px_rgba(255,0,255,0.3)]">
                    <div className="text-center space-y-4">
                        <div className="font-press-start text-sm text-retro-pink">LAST KEY PRESSED</div>
                        <div className="inline-block bg-black/50 px-8 py-4 rounded border-2 border-retro-pink shadow-[0_0_15px_rgba(255,0,255,0.2)]">
                            <span className="font-press-start text-3xl text-white animate-neon-glow">
                                {this.props.typedText || '_'}
                            </span>
                        </div>
                        <div className="font-press-start text-xs text-retro-pink/70 animate-text-flicker">
                            PRESS ANY KEY TO GUESS
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}