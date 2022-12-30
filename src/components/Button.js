import React, { useContext } from 'react'
import { CardsContext } from '../context/CardsContext'
import { GameContext } from '../context/GameContext'

const Button = (props) => {
  const { startGame, gameHasEnded, isOutOfTime, resetGame } = props

  const { fetchCards, fetchIsInFlight, numUniqueCards, setFlippedCards } =
    useContext(CardsContext)
  const { gameIsInProgress, setGameIsInProgress } = useContext(GameContext)

  const handleClick = () => {
    if (fetchIsInFlight) return

    if (!gameIsInProgress && !isOutOfTime && !gameHasEnded) {
      return startGame()
    }

    if (gameHasEnded || (!gameIsInProgress && isOutOfTime && !gameHasEnded)) {
      setGameIsInProgress(false)
      resetGame()
      fetchCards(numUniqueCards)
      setFlippedCards([])
      return
    }
  }

  const buttonClasses =
    (!gameIsInProgress && !gameHasEnded && !isOutOfTime && !fetchIsInFlight) ||
    gameHasEnded
      ? 'bg-green bg-opacity-40 cursor-pointer hover:bg-opacity-100'
      : 'bg-gray-100'

  const renderGameText = () => {
    switch (true) {
      case fetchIsInFlight:
        return '..loading'
      case !gameIsInProgress && !gameHasEnded && !isOutOfTime:
        return 'START'
      case (gameIsInProgress && gameHasEnded) || isOutOfTime:
        return 'RESTART GAME'
      default:
        return 'IN PROGRESS'
    }
  }

  return (
    <div
      className={`inline-block w-72 h-16 rounded-xl text-4xl flex justify-center items-center ${buttonClasses}`}
      onClick={handleClick}
    >
      {renderGameText()}
    </div>
  )
}

export default Button
