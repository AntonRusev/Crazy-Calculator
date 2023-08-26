import { render, screen } from "@testing-library/react";

import { CalcProvider } from "../../contexts/CalcContext";
import { GameContext } from "../../contexts/GameContext";

import ScoresTable from "./ScoresTable";

describe('Testing the ScoresTable Component', () => {
    test('Does not show highscores', () => {
        const bestTimes = [];
        render(
            <GameContext.Provider value={{ bestTimes }}>
                <CalcProvider>
                    <ScoresTable />
                </CalcProvider>
            </GameContext.Provider>
        );
        expect(screen.getByText(/No high-scores yet/i)).toBeInTheDocument();
    });
    test('Shows highscores', () => {
        const bestTimes = [1];
        render(
            <GameContext.Provider value={{ bestTimes }}>
                <CalcProvider>
                    <ScoresTable />
                </CalcProvider>
            </GameContext.Provider>
        );
        expect(screen.queryByText(/No high-scores yet/i)).toBeNull();
    });
});