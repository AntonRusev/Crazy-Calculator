import { createContext, useEffect, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({
    children
}) => {
    const [targetNumber, setTargetNumber] = useState(null);
    const [symbolClicks, setSymbolClicks] = useState(0);
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);
    const [bestTimes, setBestTimes] = useState([]);

    useEffect(() => {
        let interval;
        if (active) {
            interval = setInterval(() => {
                setTime(state => state + 10);
            }, 10);
        } else if (!active) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [active]);


    const gameStart = () => {
        generateTargetNumber();
        setSymbolClicks(0);
        setTime(0);
        setActive(true);
    }

    const gameStop = () => {
        setTargetNumber(null);
        setSymbolClicks(0);
        setTime(0);
        setActive(false);
    }

    const gameFinish = () => {
        setTargetNumber(null);
        setSymbolClicks(0);
        setActive(false);
        setBestTimes(state => [...state, `${("0" + Math.floor((time / 1000) % 60)).slice(-2)}:${("0" + ((time / 10) % 100)).slice(-2)}`]);
    }

    const generateTargetNumber = () => {
        setTargetNumber(Math.floor(Math.random() * (999 - 100 + 1) + 100));
    }

    const symbolClickCounter = () => {
        setSymbolClicks(state => state + 1);
    };

    const gameContextValue = {
        gameStart,
        gameStop,
        gameFinish,
        generateTargetNumber,
        symbolClickCounter,
        targetNumber,
        symbolClicks,
        time,
        bestTimes
    };

    return (
        <>
            <GameContext.Provider value={gameContextValue}>
                {children}
            </GameContext.Provider>
        </>
    );
};