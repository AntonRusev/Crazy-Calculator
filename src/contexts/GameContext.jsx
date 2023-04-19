import { createContext, useEffect, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({
    children
}) => {
    const [targetNumber, setTargetNumber] = useState(null);
    const [symbolClicks, setSymbolClicks] = useState(0);

    const generateTargetNumber = () => {
        setTargetNumber(Math.floor(Math.random()*(999-100+1)+100));
    }

    const symbolClickCounter = () => {
        setSymbolClicks(state => state + 1);
    };

    const gameContextValue = {
        generateTargetNumber,
        symbolClickCounter,
        targetNumber,
        symbolClicks
    };

    return (
        <>
            <GameContext.Provider value={gameContextValue}>
                {children}
            </GameContext.Provider>
        </>
    );
};