import React from "react"
import './Home.css';

export class HomeScreen extends React.Component {
    render() { 
        return (
            <div className="home">
                <h1>Hangman</h1>
                <a href="/game" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Game</a>
            </div>
        );
    }
}