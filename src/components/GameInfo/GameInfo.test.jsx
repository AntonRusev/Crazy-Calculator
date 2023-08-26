import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

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

    test('Goal Number to be shown', () => {
        const targetNumber = '444';
        render(
            <GameContext.Provider value={{ targetNumber }}>
                <CalcProvider>
                    <GameInfo />
                </CalcProvider>
            </GameContext.Provider>
        );

        expect(screen.getByText('444')).toBeInTheDocument();
    });

    test('gameStart method should be called when START is clicked', async () => {
        const gameStart = vi.fn();

        const gameInfo = render(
            <GameContext.Provider value={{ gameStart }}>
                <CalcProvider>
                    <GameInfo />
                </CalcProvider>
            </GameContext.Provider>
        );

        const startBtn = await screen.findByText('START');
        fireEvent.click(startBtn);

        expect(gameStart).toHaveBeenCalledTimes(1)
    });
});