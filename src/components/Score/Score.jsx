import css from './Score.module.css';

export const Score = ({
    score
}) => {
    return (
        <p className={css.score}>{score}</p>
    );
};