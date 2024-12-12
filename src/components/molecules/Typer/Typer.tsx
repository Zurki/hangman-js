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
            <div className="w-full max-w-2xl">
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
                    <div className="text-center mb-4">
                        <div className="text-lg font-semibold text-gray-400 mb-2">Last Key Pressed</div>
                        <div className="text-3xl font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 inline-block px-4 py-2 rounded-lg transform transition-all duration-200 hover:scale-105">
                            {this.props.typedText || '_'}
                        </div>
                    </div>
                    <div className="text-sm text-gray-500 text-center">
                        Type any letter to guess
                    </div>
                </div>
            </div>
        );
    }
}