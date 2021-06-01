import React, { useState } from 'react'
import Timer from './Timer'
import Button from './Button'
import CardsContainer from './CardsContainer'
import Info from './Info'
import { CardsProvider } from './CardsContext'

const Game = () => {
  const [initiateTimer, setInitiateTimer] = useState(false)
  const [isOutOfTime, setIsOutOfTime] = useState(false)
  const [gameHasEnded, setGameHasEnded] = useState(false)

  const resetGame = () => {
    setGameHasEnded(false)
    setIsOutOfTime(false)
    setInitiateTimer(false)
  }

  const startGame = () => {
    setInitiateTimer(true)
  }

  const outOfTime = () => {
    setIsOutOfTime(true)
    setInitiateTimer(false)
    setGameHasEnded(true)
  }

  const endTheGame = () => {
    if (!isOutOfTime) {
      setGameHasEnded(true)
      setInitiateTimer(false)
    }
  }

  return (
    <CardsProvider>
      <div
        className={`w-full h-screen ${isOutOfTime && 'bg-red-300'} ${
          gameHasEnded && 'bg-green bg-opacity-40'
        }`}
      >
        <div className='h-screen py-16 w:7/8 md:w-2/3 mx-auto flex flex-col'>
          <div className=''>
            <div className='flex items-center justify-between'>
              <h1 className='text-6xl inline-block'>Memory Game</h1>
              <Timer
                initiateTimer={initiateTimer}
                outOfTime={outOfTime}
                gameHasEnded={gameHasEnded}
              />
              <Button
                startGame={startGame}
                gameHasEnded={gameHasEnded}
                isOutOfTime={isOutOfTime}
                resetGame={resetGame}
              />
            </div>
          </div>
          <CardsContainer endTheGame={endTheGame} />
          <Info gameHasEnded={gameHasEnded} isOutOfTime={isOutOfTime} />
        </div>
      </div>
    </CardsProvider>
  )
}

export default Game
