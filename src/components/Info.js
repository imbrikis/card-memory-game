import React from 'react'
import { useStore } from '../zustandState/useStore'

const Info = (props) => {
  const { gameHasEnded, isOutOfTime } = props

  const gameIsInProgress = useStore((state) => state.gameIsInProgress)

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
