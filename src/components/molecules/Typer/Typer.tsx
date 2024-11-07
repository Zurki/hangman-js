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
            <div className="typer flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg" style={{ width: '50%' }}>
                <div className="typer-output text-2xl font-bold text-white mb-4 break-words">
                    {this.props.typedText}
                </div>
                <input type="text" placeholder="Type your guess..." hidden/>
            </div>
        );
    }
}