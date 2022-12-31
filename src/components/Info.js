import React, { useContext } from 'react'
import { CardsContext } from '../context/CardsContext'
import { GameContext } from '../context/GameContext'

const Info = (props) => {
  const { gameHasEnded, isOutOfTime } = props

  const { fetchIsInFlight } = useContext(CardsContext)
  const { gameIsInProgress } = useContext(GameContext)

  const renderedInfo = () => {
    switch (true) {
      case fetchIsInFlight:
        return '...loading game...'
      case !gameIsInProgress && !isOutOfTime && !gameHasEnded:
        return "Click 'START' to begin"
      case gameIsInProgress && !isOutOfTime && !gameHasEnded:
        return 'Start guessing!'
      case !gameIsInProgress && isOutOfTime && gameHasEnded:
        return 'You have lost 😦'
      default:
        return 'You have WON!!! 🎉'
    }
  }

  return (
    <div className='h-20 w-full flex justify-center items-center'>
      <h1 className='text-2xl xl:text-6xl md:text-4xl sm:text-2xl'>
        {renderedInfo()}
      </h1>
    </div>
  )
}

export default Info
