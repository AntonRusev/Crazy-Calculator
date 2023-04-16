import { createContext, useEffect, useState } from "react";

export const CalcContext = createContext();

export const CalcProvider = ({
    children
}) => {
    const [displayValue, setDisplayValue] = useState('0');
    const [firstNum, setFirstNum] = useState('0');
    const [secondNum, setSecondNum] = useState('0');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('0');
    const [forCalculation, setForCalculation] = useState([]);

    // useEffect(() => {
    //     console.log(displayValue, firstNum, secondNum, operator);
    // },[displayValue, firstNum, secondNum, operator]);

    useEffect(() => {
        calculate(firstNum, operator, secondNum);
        setOperator('');
    }, [secondNum]);

    const onBtnClick = (value) => {
        switch (value) {
            case '=':
                setSecondNum(+displayValue);
                break;
            case '+':
                if (operator === '') {
                    setOperator('+');
                    setFirstNum(+displayValue);
                    setDisplayValue('0');
                } else {
                    setSecondNum(+displayValue);
                }
                break;
            case '-':
                if (operator === '') {
                    setOperator('-');
                    setFirstNum(+displayValue);
                    setDisplayValue('0');
                } else {
                    setSecondNum(+displayValue);
                }
                break;
            case 'x':
                if (operator === '') {
                    setOperator('*');
                    setFirstNum(+displayValue);
                    setDisplayValue('0');
                } else {
                    setSecondNum(+displayValue);
                }
                break;
            case '/':
                if (operator === '') {
                    setOperator('/');
                    setFirstNum(+displayValue);
                    setDisplayValue('0');
                } else {
                    setSecondNum(+displayValue);
                }
                break;
            case '%':
                if (operator === '') {
                    setOperator('%');
                    setFirstNum(+displayValue);
                    setDisplayValue('0');
                } else {
                    setSecondNum(+displayValue);
                }
                break;
            case 'C':
                setResult('0');
                break;
            case 'CE':
                setDisplayValue('0');
                break;

            default:
                if (displayValue.length > 0 && displayValue[0] === '.') {
                    setDisplayValue(state => state.concat('0'+ state));
                    setDisplayValue(state => state.slice(1));
                }
                setDisplayValue(state => state + value);
                if (displayValue.length > 0 && displayValue[0] === '0') {
                    setDisplayValue(state => state.slice(1));
                }
                if (displayValue.length >= 9) {
                    setDisplayValue(state => state.slice(0, 9));
                }
                break;
        }
    };

    const calculate = (firstNum, operator, secondNum) => {
        if (operator === '+') {
            const result = +firstNum + +secondNum;
            setDisplayValue(result);
        } else if (operator === '-') {
            const result = +firstNum - +secondNum;
            setDisplayValue(result);
        } else if (operator === '*') {
            const result = +firstNum * +secondNum;
            setDisplayValue(result);
        } else if (operator === '/') {
            const result = +firstNum / +secondNum;
            setDisplayValue(result);
        }


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