import React from "react"
import './Home.css';

export class HomeScreen extends React.Component {
    render() { 
        return (
            <div className="home">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hangman</h1>
                <a href="/game" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-10">Start Game</a>
                <a href="/leaderboard" className="pt-5 text-gray-500">Leaderboard</a>
            </div>
        );
    }
}