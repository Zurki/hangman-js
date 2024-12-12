import React from "react"
import './Home.css';

export class HomeScreen extends React.Component {
    render() { 
        return (
            <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md mx-4 transform animate-fadeIn">
                    <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
                        Hangman
                    </h1>
                    
                    <div className="space-y-4">
                        <a 
                            href="/game" 
                            className="block w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 text-center"
                        >
                            Start Game
                        </a>
                        
                        <a 
                            href="/leaderboard" 
                            className="block w-full py-3 px-6 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 text-center"
                        >
                            Leaderboard
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}