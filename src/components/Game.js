import React, { useState, useContext } from 'react'
import Timer from './Timer'
import Button from './Button'
import CardsContainer from './CardsContainer'
import Info from './Info'
import { CardsProvider } from './CardsContext'

const Game = () => {
  const [initiateTimer, setInitiateTimer] = useState(false)
  const [isOutOfTime, setIsOutOfTime] = useState(false)
  const [wonGame, setWonGame] = useState(false)

  const startGame = () => {
    setInitiateTimer(true)
  }

  const outOfTime = () => {
    setIsOutOfTime(true)
  }

  const hasWonGame = () => {
    if (!isOutOfTime) {
      setWonGame(true)
      setInitiateTimer(false)
    }
  }

  return (
    <CardsProvider>
      <div
        className={`w-full h-screen ${isOutOfTime && 'bg-red-300'} ${
          wonGame && 'bg-green bg-opacity-40'
        }`}
      >
        <div className='h-screen py-16 w:7/8 md:w-2/3 mx-auto flex flex-col'>
          <div className=''>
            <div className='flex items-center justify-between'>
              <h1 className='text-6xl inline-block'>Remaining Time</h1>
              <Timer initiateTimer={initiateTimer} outOfTime={outOfTime} />
              <Button
                startGame={startGame}
                wonGame={wonGame}
                isOutOfTime={isOutOfTime}
              />
            </div>
          </div>
          <CardsContainer hasWonGame={hasWonGame} />
          <Info wonGame={wonGame} isOutOfTime={isOutOfTime} />
        </div>
      </div>
    </CardsProvider>
  )
}

export default Game
