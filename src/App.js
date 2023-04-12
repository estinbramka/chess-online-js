import React from 'react';
import Game from './pages/Game';
import { GameProvider } from './context/GameContext';
import './App.css';

function App() {
    return (
        <GameProvider>
            <Game />
        </GameProvider>
    );
}

export default App;