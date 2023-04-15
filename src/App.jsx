import { CalcProvider } from './contexts/CalcContext'

import { Calculator } from './components/Calculator/Calculator'

import './App.css'

function App() {
  return (
    <CalcProvider>
      <Calculator />
    </CalcProvider>
  )
}

export default App