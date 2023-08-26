import { createContext, useCallback, useEffect, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({
    children
}) => {
    const [targetNumber, setTargetNumber] = useState('---');
    const [symbolClicks, setSymbolClicks] = useState(0);
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);
    const [bestTimes, setBestTimes] = useState([]);
    const [isModalActive, setIsModalActive] = useState(false);
    const [newRecord, setNewRecord] = useState(false);

    useEffect(() => {
        if (isModalActive) {
            setTimeout(() => {
                onModalClose();
            }, 3000);
        };
    }, [isModalActive]);

    useEffect(() => {
        let interval;

        if (active) {
            interval = setInterval(() => {
                setTime(state => state + 10);
            }, 10);
        } else if (!active) {
            clearInterval(interval);
        };

        return () => clearInterval(interval);
    }, [active]);

    useEffect(() => {
        if (bestTimes.length > 1 && bestTimes[0] == `${("0" + Math.floor((time / 1000) % 60)).slice(-2)}:${("0" + ((time / 10) % 100)).slice(-2)}`) {
            setNewRecord(true);
        };
    }, [bestTimes]);

    const onModalClose = useCallback(() => {
        setIsModalActive(false);
        setNewRecord(false);
    }, [children]);

    const onModalActivate = useCallback(() => {
        setIsModalActive(true);
    }, [children]);

    const gameStart = useCallback(() => {
        generateTargetNumber();
        setSymbolClicks(0);
        setTime(0);
        setActive(true);
    }, [children]);

    const gameStop = useCallback(() => {
        setTargetNumber('---');
        setSymbolClicks(0);
        setTime(0);
        setActive(false);
    }, []);

    const gameFinish = useCallback(() => {
        setTargetNumber('---');
        setSymbolClicks(0);
        setActive(false);
        setBestTimes(state => [...state, `${("0" + Math.floor((time / 1000) % 60)).slice(-2)}:${("0" + ((time / 10) % 100)).slice(-2)}`]);
        setIsModalActive(true);
    }, [children]);

    const generateTargetNumber = useCallback(() => {
        setTargetNumber(Math.floor(Math.random() * (999 - 100 + 1) + 100));
    }, [children]);

    const symbolClickCounter = useCallback(() => {
        setSymbolClicks(state => state + 1);
    }, [children]);

    const gameContextValue = {
        onModalClose,
        onModalActivate,
        gameStart,
        gameStop,
        gameFinish,
        generateTargetNumber,
        symbolClickCounter,
        isModalActive,
        targetNumber,
        symbolClicks,
        time,
        bestTimes,
        newRecord
    };

    return (
        <>
            <GameContext.Provider value={gameContextValue}>
                {children}
            </GameContext.Provider>
        </>
    );
};