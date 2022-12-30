import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'

const Info = (props) => {
  const { gameHasEnded, isOutOfTime } = props

  const { gameIsInProgress } = useContext(GameContext)

  const info =
    !gameIsInProgress && !isOutOfTime && !gameHasEnded
      ? "Click 'START' to begin"
      : gameIsInProgress && !isOutOfTime && !gameHasEnded
      ? 'Start guessing!'
      : !gameIsInProgress && isOutOfTime && gameHasEnded
      ? 'You have lost 😦'
      : 'You have WON!!! 🎉'

  return (
    <div className='h-20 w-full flex justify-center items-center'>
      <h1 className='text-6xl'>{info}</h1>
    </div>
  )
}

export default Info
