import { render, screen, fireEvent } from "@testing-library/react";

import { CalcContext, CalcProvider } from "../../contexts/CalcContext";
import { GameProvider } from "../../contexts/GameContext";
import Button from "./Button";

describe('Testing the Button Component', () => {
    test('Button shows proper value', async () => {
        render(
            <GameProvider>
                <CalcProvider>
                    <Button value='5' />
                </CalcProvider>
            </GameProvider>
        );

        expect(await screen.getByText(/5/i)).toBeInTheDocument();
    });

    test('method is called when Button is clicked', async () => {
        const onBtnClick = vi.fn();
        render(
            <GameProvider>
                <CalcContext.Provider value={{ onBtnClick }}>
                    <Button value='5' />
                </CalcContext.Provider>
            </GameProvider>
        );

        const startBtn = await screen.findByText(/5/i);
        fireEvent.click(startBtn);

        expect(onBtnClick).toHaveBeenCalledTimes(1)
    });
});