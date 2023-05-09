import { useContext } from "react";

import { GameContext } from "../../contexts/GameContext";

import css from "./Timer.module.css";

export default function Timer() {
    const { time } = useContext(GameContext)

    return (
        <div className={css.timer}>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>:
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
    )
}