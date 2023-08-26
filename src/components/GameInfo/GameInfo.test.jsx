import { vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { CalcProvider } from "../../contexts/CalcContext";
import { GameProvider, GameContext } from "../../contexts/GameContext";

import { GameInfo } from "./GameInfo";

describe('Testing GameInfo Component', () => {
    test('Show Start and Stop buttons', () => {
        render(
            <GameProvider>
                <CalcProvider>
                    <GameInfo />
                </CalcProvider>
            </GameProvider>
        );
        expect(screen.getByText(/start/i)).toBeInTheDocument();
        expect(screen.getByText(/stop/i)).toBeInTheDocument();
    });

    test('Show heading', () => {
        render(
            <GameProvider>
                <CalcProvider>
                    <GameInfo />
                </CalcProvider>
            </GameProvider>
        );
        const title = screen.getByRole('heading')
        expect(title).toBeInTheDocument();
    });

    test('Goal Number to not be shown', async () => {
        render(
            <GameProvider>
                <CalcProvider>
                    <GameInfo />
                </CalcProvider>
            </GameProvider>
        );

        expect(screen.getByText(/---/i)).toBeInTheDocument();
    });
});