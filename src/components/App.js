import React from 'react'
import Game from './Game'

import { GameContextProvider } from '../context/GameContext'

const App = () => {
  return (
    <GameContextProvider>
      <div>
        <Game />
      </div>
    </GameContextProvider>
  )
}

export default App
