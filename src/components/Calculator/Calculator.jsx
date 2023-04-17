import { useContext } from "react";

import { Button } from "../Button/Button";
import { btnValues } from "../../data/button-values";

import { CalcContext } from "../../contexts/CalcContext";

import css from "./Calculator.module.css";

export const Calculator = () => {
    const { currentInput, result } = useContext(CalcContext);

    return (
        <div id={css.calculator}>
            <div className={css['display-wrapper']}>
                <p className={css.display}>{currentInput !== '0' ? currentInput : result}</p>
            </div>
            <div className={css['btn-holder']}>
                {btnValues.map(x => <Button key={x} value={x} />)}
            </div>
        </div>
    );
}