import { useContext } from "react";

import { GameContext } from "../../contexts/GameContext";

import css from "./InfoModal.module.css";

export const InfoModal = () => {
    const { onModalClose, time, newRecord } = useContext(GameContext);

    return (
        <div onClick={onModalClose} className={css.overlay}>
            <div onClick={(e) => e.stopPropagation()} className={css[`modal-container`]}>
                <p className={css['modal-message']}>Challenge completed!</p>

                <span>Your time is </span>

                <span className={css.timer}> {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:{("0" + ((time / 10) % 100)).slice(-2)}</span>

                {newRecord ? <p className={css.record}>Congratulations! This is a new record!</p> : ''}
            </div>
        </div>
    );
};