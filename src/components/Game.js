import React, { useState } from 'react'
import Timer from './Timer'
import Button from './Button'
import CardsContainer from './CardsContainer'
import Info from './Info'

const Game = () => {
  const [gameIsInProgress, setGameIsInProgress] = useState(false)
  const [initiateTimer, setInitiateTimer] = useState(false)

  const startGame = () => {
    setGameIsInProgress(true)
    setInitiateTimer(true)
  }

  return (
    <div className='h-screen py-16 w:7/8 md:w-2/3 mx-auto flex flex-col'>
      <div className=''>
        <div className='flex items-center justify-between'>
          <h1 className='text-6xl inline-block'>Remaining Time</h1>
          <Timer initiateTimer={initiateTimer} />
          <Button startGame={startGame} gameIsInProgress={gameIsInProgress} />
        </div>
      </div>
      <CardsContainer />
      <Info gameIsInProgress={gameIsInProgress} />
    </div>
  )
}

export default Game
