import React, { useContext } from 'react'
import { CardsContext } from './CardsContext'

const Info = ({ wonGame, isOutOfTime }) => {
  const { _gameIsInProgress } = useContext(CardsContext)
  const [gameIsInProgress, setGameIsInProgress] = _gameIsInProgress

  return (
    <div className='h-20 w-full flex justify-center items-center'>
      <h1 className='text-6xl'>
        {!gameIsInProgress
          ? "Click 'START' to begin"
          : gameIsInProgress && wonGame
          ? "You've won!!!"
          : gameIsInProgress && isOutOfTime
          ? 'You have lost :('
          : 'Start guessing!'}
      </h1>
    </div>
  )
}

export default Info
