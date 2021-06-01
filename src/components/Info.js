import React, { useContext } from 'react'
import { CardsContext } from './CardsContext'

const Info = ({ gameHasEnded, isOutOfTime }) => {
  const { _gameIsInProgress } = useContext(CardsContext)
  const [gameIsInProgress, setGameIsInProgress] = _gameIsInProgress

  const info =
    !gameIsInProgress && !isOutOfTime && !gameHasEnded
      ? "Click 'START' to begin"
      : gameIsInProgress && !isOutOfTime && !gameHasEnded
      ? 'Start guessing!'
      : !gameIsInProgress && isOutOfTime && gameHasEnded
      ? 'You have lost :('
      : 'You have WON!!!'

  return (
    <div className='h-20 w-full flex justify-center items-center'>
      <h1 className='text-6xl'>{info}</h1>
    </div>
  )
}

export default Info
