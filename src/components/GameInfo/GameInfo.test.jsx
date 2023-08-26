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
        expect(screen.queryByText(/modal/i)).toBeNull();
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

        expect(screen.getByText(/444/i)).toBeInTheDocument();
    });

    test('Operations counter to change', () => {
        const symbolClicks = '2';
        render(
            <GameContext.Provider value={{ symbolClicks }}>
                <CalcProvider>
                    <GameInfo />
                </CalcProvider>
            </GameContext.Provider>
        );

        expect(screen.getByText(/2/i)).toBeInTheDocument();
    });

    test('method is called when START or STOP is clicked', async () => {
        const gameStart = vi.fn();
        const gameStop = vi.fn();

        const gameInfo = render(
            <GameContext.Provider value={{ gameStart, gameStop }}>
                <CalcProvider>
                    <GameInfo />
                </CalcProvider>
            </GameContext.Provider>
        );

        const startBtn = await screen.findByText(/start/i);
        fireEvent.click(startBtn);
        expect(gameStart).toHaveBeenCalledTimes(1);

        const stopBtn = await screen.findByText(/stop/i);
        fireEvent.click(stopBtn);
        expect(gameStop).toHaveBeenCalledTimes(1);
    });
});