import { createContext, useEffect, useState, useContext } from "react";

import { GameContext } from "./GameContext";

export const CalcContext = createContext();

export const CalcProvider = ({
    children
}) => {
    const [result, setResult] = useState('0');
    const [symbol, setSymbol] = useState('');
    const [currentInput, setCurrentInput] = useState('0');

    const { symbolClickCounter } = useContext(GameContext);

    const onBtnClick = (value) => {
        if (value === '=') {
            equals();
        } else if (value === 'C' || value === 'CE') {
            erase(value);
        } else if (value === '%') {
            percent();
        } else if (value === '+'
            || value === '-'
            || value === 'x'
            || value === '/') {
            symbolClickCounter();
            symbolType(value);
        } else {
            numInput(value);
        }
    };

    const numInput = (value) => {
        if (value === '.' && currentInput.includes('.')) {
            return;
        }

        if (currentInput[0] === '.') {
            setCurrentInput(state => state.concat('0' + state));
            setDisplayValue(state => state.slice(1));
        }

        return setCurrentInput(state => state + value);
    };

    const equals = () => {
        let total = Number(result);
        switch (symbol) {
            case '+':
                total = Number(result) + Number(currentInput);
                break;
            case '-':
                total = Number(result) - Number(currentInput);
                break;
            case 'x':
                if (result !== '0' && currentInput !== '0') {
                    total = Number(result) * Number(currentInput);
                }
                break;
            case '/':
                if (result !== '0' && currentInput !== '0') {
                    total = Number(result) / Number(currentInput);
                }
                break;
            default:
                break;
        }
        setResult(String(Math.round((total + Number.EPSILON) * 100) / 100));
        setCurrentInput('0');
    };

    const symbolType = (value) => {
        if (!symbol) {
            setResult(currentInput);
            setCurrentInput('0');
            setSymbol(value);
        } else {
            equals();
            setSymbol(value);
        }

    };

    const erase = (value) => {
        if (value === "C") {
            setResult('0');
            setCurrentInput('0');
            setSymbol('');
        } else {
            setCurrentInput('0');
        }
    };

    const percent = () => {
        let percentResult = 0;
        if (result !== '0') {
            percentResult = result * (Number(currentInput) / 100);
        } else {
            percentResult = Number(currentInput) / 100;
        }
        setCurrentInput(String(Math.round((percentResult + Number.EPSILON) * 100) / 100));
    };

    const calcContextValue = {
        onBtnClick,
        currentInput,
        result,
    };

    return (
        <>
            <CalcContext.Provider value={calcContextValue}>
                {children}
            </CalcContext.Provider>
        </>
    );
};