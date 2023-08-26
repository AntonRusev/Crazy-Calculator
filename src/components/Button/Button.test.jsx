import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import { CalcContext, CalcProvider } from "../../contexts/CalcContext";
import { GameProvider, GameContext } from "../../contexts/GameContext";
import Button from "./Button";

describe('Testing the Button Component', () => {
    const onBtnClick = vi.fn();

    test('Button shows proper value', async () => {
        render(
            <GameProvider>
                <CalcProvider calcContextValue={onBtnClick}>
                    <Button value='5' />
                </CalcProvider>
            </GameProvider>
        );

        expect(await screen.getByText(/5/i)).toBeInTheDocument();
    });

    // test('Button shows proper value', async () => {
    //     const onBtnClick = vi.fn();
    //     const value = 'value'
    //     render(
    //         <GameContext.Provider value={value}>
    //             <CalcContext.Provider value={onBtnClick}>
    //                 <Button value='5' />
    //             </CalcContext.Provider>
    //         </GameContext.Provider>
    //     );

    //     const startBtn = await screen.findByText('5');
    //     fireEvent.click(startBtn);


    //     expect(onBtnClick).toHaveBeenCalledTimes(1)
    // });
});