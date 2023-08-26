import { memo, useContext, useCallback, useEffect, useState } from "react";

import Button from "../Button/Button";
import { defaultBtnValues } from "../../data/button-values";

import { CalcContext } from "../../contexts/CalcContext";
import { GameContext } from "../../contexts/GameContext";

import css from "./Calculator.module.css";

const Calculator = () => {
    const [buttons, setButtons] = useState(defaultBtnValues);

    const { currentInput, result } = useContext(CalcContext);
    const { targetNumber, symbolClicks, gameFinish } = useContext(GameContext);

    useEffect(() => {
        shuffle(buttons);
    }, [currentInput, result]);

    useEffect(() => {
        if (symbolClicks >= 3 && result == targetNumber) {
            console.log('JACKPOT');
            gameFinish();
        };
    }, [symbolClicks, result, targetNumber]);

    const shuffle = useCallback((values) => {
        for (let i = values.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = values[i];
            values[i] = values[j];
            values[j] = temp;
        };

        setButtons(values);
    }, []);

    return (
        <div id={css.calculator}>
            <div className={css['display-wrapper']}>
                <p className={css.display}>{currentInput !== '0' ? +currentInput : +result}</p>
            </div>

            <div className={css['btn-holder']}>
                {buttons.map(x => <Button key={x} value={x} />)}
            </div>
        </div>
    );
};

export default memo(Calculator);