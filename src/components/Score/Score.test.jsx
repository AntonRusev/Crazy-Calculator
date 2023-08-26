import { render, screen } from "@testing-library/react";

import { CalcProvider } from "../../contexts/CalcContext";
import { GameProvider } from "../../contexts/GameContext";

import { Score } from "./Score";

describe('Testing the Score Component', () => {
    test('score is shown', () => {
        const score = '01:12'
        render(
            <GameProvider>
                <CalcProvider>
                    <Score score={score} />
                </CalcProvider>
            </GameProvider>
        );
        expect(screen.getByText(/01:12/i)).toBeInTheDocument();
    });
});