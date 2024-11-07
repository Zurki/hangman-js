import React, { Component } from "react";

interface TyperState {
    typedText: string;
}

export class Typer extends Component<object, TyperState> {
    constructor(props: object) {
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
            this.setState((prevState) => ({
                typedText: prevState.typedText + event.key
            }));
        }
    };

    render() {
        return (
            <div className="typer flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg" style={{ width: '50%' }}>
                <div className="typer-output text-2xl font-bold text-white mb-4 break-words">
                    {this.state.typedText}
                </div>
                <input type="text" className="typer-input w-full p-2 text-center text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" placeholder="Type your guess..." />
            </div>
        );
    }
}