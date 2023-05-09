import { Calculator } from './components/Calculator/Calculator'
import { GameInfo } from './components/GameInfo/GameInfo'
import { ScoresTable } from './components/ScoresTable/ScoresTable'

import { GameProvider } from './contexts/GameContext'
import { CalcProvider } from './contexts/CalcContext'

import './App.css'

function App() {

    return (
        <GameProvider>
            <CalcProvider>
                <h1>CRAZY CALCULATING CHALLENGE</h1>
                <main id='main'>
                <GameInfo />
                <Calculator />
                <ScoresTable />
                </main>
                <h5>Rules:</h5>
                <p className='rules'>Once you click the "START" button, a random three-digit number will be generated and the timer will start. Your goal is as quickly as possible to get that number as result on the display of the calculator, while performing a minimum of three algorithmic operations(using one, or a mix of "+", "-", "/" or "x").</p>
                <p className='rules'>HINT: For extra challenge, do not reset the value on the screen of the calculator.</p>
            </CalcProvider>
        </GameProvider>
    )
}

export default App