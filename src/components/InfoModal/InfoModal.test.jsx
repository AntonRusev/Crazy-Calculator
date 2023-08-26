import { render, screen } from "@testing-library/react";

import { CalcProvider } from "../../contexts/CalcContext";
import { GameProvider, GameContext } from "../../contexts/GameContext";

import { InfoModal } from "./InfoModal";

describe('Testing InfoModal Component', () => {
    test('Completion message is shown', () => {
        render(
            <GameProvider>
                <CalcProvider>
                    <InfoModal />
                </CalcProvider>
            </GameProvider>
        );
        expect(screen.getByText(/Challenge completed!/i)).toBeInTheDocument();
    });

    test('New record message is shown', () => {
        const newRecord = true;
        render(
            <GameContext.Provider value={{ newRecord }}>
                <CalcProvider>
                    <InfoModal />
                </CalcProvider>
            </GameContext.Provider>
        );
        expect(screen.getByText(/Congratulations! This is a new record!/i)).toBeInTheDocument();
    });

    test('The time of completion is not 00:00', () => {
        const time = 2480;
        render(
            <GameContext.Provider value={{ time }}>
                <CalcProvider>
                    <InfoModal />
                </CalcProvider>
            </GameContext.Provider>
        );
        expect(screen.queryByText(/00:00/i)).toBeNull();
    });
});