import { createRoot } from 'react-dom/client';

import { HomeScreen } from './components/views/Home/Home';
import { GameScreen } from './components/views/Game/Game';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './style.css';
import './input.css';

import React from 'react';
import { LeaderboardScreen } from './components/views/Leaderboard/Leaderboard';

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