import React, { useState, useContext } from 'react'
import Timer from './Timer'
import Button from './Button'
import CardsContainer from './CardsContainer'
import Info from './Info'
import { CardsProvider } from './CardsContext'

const Game = () => {
  const [initiateTimer, setInitiateTimer] = useState(false)

  const startGame = () => {
    setInitiateTimer(true)
  }

  return (
    <CardsProvider>
      <div className='h-screen py-16 w:7/8 md:w-2/3 mx-auto flex flex-col'>
        <div className=''>
          <div className='flex items-center justify-between'>
            <h1 className='text-6xl inline-block'>Remaining Time</h1>
            <Timer initiateTimer={initiateTimer} />
            <Button startGame={startGame} />
          </div>
        </div>
        <CardsContainer />
        <Info />
      </div>
    </CardsProvider>
  )
}

export default Game
