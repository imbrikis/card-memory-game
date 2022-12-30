import React from 'react'
import Game from './Game'
import { CardsProvider } from '../context/CardsContext'
import { GameContextProvider } from '../context/GameContext'

const App = () => {
  return (
    <GameContextProvider>
      <CardsProvider>
        <div>
          <Game />
        </div>
      </CardsProvider>
    </GameContextProvider>
  )
}

export default App
