import { createRoot } from 'react-dom/client';

import { GameScreen } from './components/views/Game/Game';
import { HomeScreen } from './components/views/Home/Home';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './input.css';
import './style.css';

import React from 'react';
import { LeaderboardScreen } from './components/views/Leaderboard/Leaderboard';
import GameOver from './components/views/GameOver/GameOver';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeScreen />
    },
    {
        path: '/game',
        element: <GameScreen />
    },
    {
        path: '/leaderboard',
        element: <LeaderboardScreen />
    },
    {
        path: '/game-over',
        element: <GameOver score={0} highScore={0} onRestart={() => {
            throw new Error('Function not implemented.');
        }} onMainMenu={() => {
            throw new Error('Function not implemented.');
        }} />
    },
    {
        path: '/api/leaderboard',
        element: <LeaderboardScreen />
    }
]);


// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
createRoot(document.getElementById('app') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);