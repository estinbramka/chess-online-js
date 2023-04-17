import React, { createContext, useReducer } from 'react';
import GameReducer from './GameReducer';

const initialState = {
    possibleMoves: [],
    turn: 'w', //w or b. w goes first so its the default
    check: false, //true if the side to move (current turn) is in check.
};

export const GameContext = createContext(initialState);

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GameReducer, initialState);

    return (
        <GameContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GameContext.Provider>
    );
};