import { render, screen } from "@testing-library/react";

import { CalcProvider } from "../../contexts/CalcContext";
import { GameContext } from "../../contexts/GameContext";

import Timer from "./Timer";

describe('Testing the Timer Component', () => {
    test('Timer is started', () => {
        const time = 2480;
        render(
            <GameContext.Provider value={{ time }}>
                <CalcProvider>
                    <Timer />
                </CalcProvider>
            </GameContext.Provider>
        );
        expect(screen.queryByText(/00/i)).toBeNull();
    });
    test('Timer is not started', () => {
        const time = 0;
        render(
            <GameContext.Provider value={{ time }}>
                <CalcProvider>
                    <Timer />
                </CalcProvider>
            </GameContext.Provider>
        );
        expect(screen.queryAllByText(/00/i)).toHaveLength(2);
    });
});