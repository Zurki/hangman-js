import React from "react"
import './Home.css';

export class HomeScreen extends React.Component {
    render() { 
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
                {/* Retro Grid Background */}
                <div className="absolute inset-0 bg-retro-grid opacity-30"></div>
                
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-retro-gradient opacity-20"></div>
                
                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none animate-scanline"></div>

                <div className="relative z-10 max-w-4xl w-full">
                    {/* Title */}
                    <div className="text-center mb-16">
                        <h1 className="font-press-start text-6xl text-white animate-neon-glow mb-4">HANGMAN</h1>
                        <p className="text-retro-blue font-press-start text-sm animate-text-flicker">
                            PRESS START TO PLAY
                        </p>
                    </div>

                    {/* Game Menu */}
                    <div className="bg-black/50 p-8 rounded-lg border border-retro-pink/50 shadow-[0_0_20px_rgba(255,0,255,0.3)] backdrop-blur-sm">
                        <div className="space-y-6">
                            <a 
                                href="/game" 
                                className="block w-full py-4 px-6 bg-retro-pink/20 hover:bg-retro-pink/30 border-2 border-retro-pink text-retro-pink font-press-start text-center rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,255,0.5)] relative overflow-hidden group"
                            >
                                <span className="relative z-10">START GAME</span>
                                <div className="absolute inset-0 bg-retro-pink/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </a>
                            
                            <a 
                                href="/leaderboard" 
                                className="block w-full py-4 px-6 bg-retro-blue/20 hover:bg-retro-blue/30 border-2 border-retro-blue text-retro-blue font-press-start text-center rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] relative overflow-hidden group"
                            >
                                <span className="relative z-10">HIGH SCORES</span>
                                <div className="absolute inset-0 bg-retro-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </a>

                            {/* Retro Decorative Elements */}
                            <div className="flex justify-center space-x-4 mt-8">
                                <div className="w-3 h-3 bg-retro-pink animate-pulse"></div>
                                <div className="w-3 h-3 bg-retro-blue animate-pulse [animation-delay:150ms]"></div>
                                <div className="w-3 h-3 bg-retro-purple animate-pulse [animation-delay:300ms]"></div>
                            </div>

                            <div className="text-center text-sm font-press-start text-gray-500 mt-6">
                                INSERT COIN TO CONTINUE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}