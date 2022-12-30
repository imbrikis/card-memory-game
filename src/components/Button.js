import React, { useContext } from 'react'
import { CardsContext } from '../context/CardsContext'

const Button = (props) => {
  const { startGame, gameHasEnded, isOutOfTime, resetGame } = props

  const {
    fetchCards,
    gameIsInProgress,
    numUniqueCards,
    setGameIsInProgress,
    setFlippedCards,
  } = useContext(CardsContext)

  const handleClick = () => {
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
    (!gameIsInProgress && !gameHasEnded && !isOutOfTime) || gameHasEnded
      ? 'bg-green bg-opacity-40 cursor-pointer hover:bg-opacity-100'
      : 'bg-gray-100'

  const renderedGameText =
    !gameIsInProgress && !gameHasEnded && !isOutOfTime
      ? 'START'
      : (gameIsInProgress && gameHasEnded) || isOutOfTime
      ? 'RESTART GAME'
      : 'IN PROGRESS'

  return (
    <div
      className={`inline-block w-72 h-16 rounded-xl text-4xl flex justify-center items-center ${buttonClasses}`}
      onClick={handleClick}
    >
      {renderedGameText}
    </div>
  )
}

export default Button
