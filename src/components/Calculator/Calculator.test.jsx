import { render, screen } from "@testing-library/react";

import { CalcContext, CalcProvider } from "../../contexts/CalcContext";
import { GameProvider } from "../../contexts/GameContext";

import Calculator from "./Calculator";

describe('Testing the Calculator Component', () => {
    test('keys to be shown', () => {
        render(
            <GameProvider>
                <CalcProvider>
                    <Calculator />
                </CalcProvider>
            </GameProvider>
        );

        expect(screen.getByText(/ce/i)).toBeInTheDocument();
        expect(screen.getByText(/x/i)).toBeInTheDocument();
        expect(screen.getByText(/%/i)).toBeInTheDocument();
        expect(screen.getByText(/=/i)).toBeInTheDocument();
    });

    test('Calculator display to show result', () => {
        const currentInput = '0';
        const result = '123';
        render(
            <GameProvider>
                <CalcContext.Provider value={{ currentInput, result }}>
                    <Calculator />
                </CalcContext.Provider>
            </GameProvider>
        );

        expect(screen.getByText(/123/i)).toBeInTheDocument();
    });

    test('Calculator display to show current input', () => {
        const currentInput = '88';
        const result = '123';
        render(
            <GameProvider>
                <CalcContext.Provider value={{ currentInput, result }}>
                    <Calculator />
                </CalcContext.Provider>
            </GameProvider>
        );

        expect(screen.getByText(/88/i)).toBeInTheDocument();
    });
});
