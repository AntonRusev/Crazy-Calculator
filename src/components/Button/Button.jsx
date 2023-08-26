import { memo, useContext } from 'react';

import { CalcContext } from '../../contexts/CalcContext';

import css from './Button.module.css';

const Button = ({
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
};

export default memo(Button);