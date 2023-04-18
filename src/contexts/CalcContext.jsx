import { createContext, useEffect, useState } from "react";

export const CalcContext = createContext();

export const CalcProvider = ({
    children
}) => {
    const [result, setResult] = useState('0');
    const [symbol, setSymbol] = useState('');
    const [currentInput, setCurrentInput] = useState('0');

    useEffect(() => {
        console.log(result);
        console.log(symbol);
        console.log(currentInput);
    }, [currentInput, symbol, result]);

    useEffect(() => {
        if (currentInput.length > 1 && currentInput[0] === '0' && currentInput[1] !== '.') {
            setCurrentInput(state => state.slice(1));
        }
    }, [currentInput]);

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
            symbolType(value);

        } else {
            numInput(value);
        }
    };

    const numInput = (value) => {
        if (value === '.' && currentInput.includes('.')) {
            return;
        }

        if (currentInput.length > 1 && currentInput[0] === '0' && currentInput[1] !== '.') {
            setCurrentInput(state => state.slice(1));
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
        setResult(String(total));
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
        setCurrentInput(String(percentResult));
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