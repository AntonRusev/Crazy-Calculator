import { CalcProvider } from './contexts/CalcContext'

import { Calculator } from './components/Calculator/Calculator'

import './App.css'
import { GameProvider } from './contexts/GameContext'
import { GameInfo } from './components/GameInfo/GameInfo'

function App() {
    return (
        <GameProvider>
            <CalcProvider>
                <Calculator />
                <GameInfo />
            </CalcProvider>
        </GameProvider>
    )
}

export default App