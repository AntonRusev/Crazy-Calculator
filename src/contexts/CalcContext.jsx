import { createContext, useEffect, useState } from "react";

export const CalcContext = createContext();

export const CalcProvider = ({
    children
}) => {
    const [displayValue, setDisplayValue] = useState('0');
    const [result, setResult] = useState('0');
    const [forCalculation, setForCalculation] = useState([]);

    const onBtnClick = (value) => {
        switch (value) {
            case '=':

                break;
            case '+':

                break;
            case '-':

                break;
            case 'x':

                break;
            case '/':

                break;
            case '%':

                break;
            case '.':

                break;
            case 'C':

                break;
            case 'CE':

                break;

            default:
                setDisplayValue(state => state + value);
                if (displayValue.length > 0 && displayValue[0] === '0') {
                    setDisplayValue(state => state.slice(1));
                }
                break;
        }
    };

    // const onBtnClick = (value) => {
    //     if (
    //         value === 'x'
    //         || value === '/'
    //         || value === '+'
    //         || value === '-'
    //     ) {
    //         setForCalculation(state => [...state, displayValue, value]);
    //         setDisplayValue('0')
    //     } else if (value === '=') {
    //         setForCalculation(state => [...state, displayValue]);
    //         calculate();
    //     } else {
    //         setDisplayValue(state => state + value);
    //         if (displayValue.length > 0 && displayValue[0] === '0') {
    //             setDisplayValue(state => state.slice(1));
    //         }
    //     }
    // };


    const calculate = () => {
        let finalResult = 0;
        let currentNum = 0;
        console.log(forCalculation.length)
        for (let i = 0; i <= forCalculation.length; i++) {
            if (i % 2 === 0) {
                currentNum = +forCalculation[i];
                console.log(forCalculation)
                console.log(currentNum)
            } else {
                if (forCalculation[i] === '+') {
                    finalResult += currentNum;
                    console.log('+')
                } else if (forCalculation[i] === '-') {
                    finalResult -= currentNum;
                    console.log('-')
                } else if (forCalculation[i] === 'x') {
                    finalResult *= currentNum;
                    console.log('-')
                } else if (forCalculation[i] === '/') {
                    finalResult /= currentNum;
                    console.log('/')
                }
            }
        }
        // console.log(finalResult)
        setResult(finalResult);
        setDisplayValue(result);
    }

    const calcContextValue = {
        setDisplayValue,
        onBtnClick,
        displayValue,
    };

    return (
        <>
            <CalcContext.Provider value={calcContextValue}>
                {children}
            </CalcContext.Provider>
        </>
    );
};