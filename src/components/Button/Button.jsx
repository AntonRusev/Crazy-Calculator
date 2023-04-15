import { useContext } from 'react';

import { CalcContext } from '../../contexts/CalcContext';

import css from './Button.module.css';

export const Button = ({
    value
}) => {
    const { onBtnClick } = useContext(CalcContext);

    return (
        <div className={css.button} onClick={() => onBtnClick(value)}>
            <p className={css["btn-value"]}>
                {value}
            </p>
        </div>
    );
}