import React, { useContext } from 'react'
import { CardsContext } from './CardsContext'

const Info = () => {
  const { _gameIsInProgress } = useContext(CardsContext)
  const [gameIsInProgress, setGameIsInProgress] = _gameIsInProgress

  return (
    <div className='h-20 w-full flex justify-center items-center'>
      <h1 className='text-6xl'>
        {!gameIsInProgress ? "Click 'START' to begin" : 'Start guessing!'}
      </h1>
    </div>
  )
}

export default Info
