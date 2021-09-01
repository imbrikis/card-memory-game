import React, { useContext } from 'react'
import { shuffleCards } from './ShuffleCards'
import { CardsContext } from './CardsContext'

const Button = ({ startGame, gameHasEnded, isOutOfTime, resetGame }) => {
  const { _cards } = useContext(CardsContext)
  const [, setCards] = _cards
  const { _gameIsInProgress } = useContext(CardsContext)
  const [gameIsInProgress, setGameIsInProgress] = _gameIsInProgress
  const { _flippedCards } = useContext(CardsContext)
  const [, setFlippedCards] = _flippedCards

  const handleClick = () => {
    if (!gameIsInProgress) {
      setGameIsInProgress(true)
      let shuffledCards = shuffleCards()
      setCards(shuffledCards)
      startGame()
    }
  }

  const handleClickNewGame = () => {
    if (gameHasEnded) {
      setGameIsInProgress(false)
      resetGame()
      let shuffledCards = shuffleCards()
      setCards(shuffledCards)
      setFlippedCards([])
    }
  }

  return (
    <div
      className={`inline-block w-72 h-16 rounded-xl text-4xl flex justify-center items-center ${
        (!gameIsInProgress && !gameHasEnded && !isOutOfTime) || gameHasEnded
          ? 'bg-green bg-opacity-40 cursor-pointer hover:bg-opacity-100'
          : 'bg-gray-100'
      }`}
      onClick={
        !gameIsInProgress && !isOutOfTime && !gameHasEnded
          ? handleClick
          : gameHasEnded || (!gameIsInProgress && isOutOfTime && !gameHasEnded)
          ? handleClickNewGame
          : null
      }
    >
      {!gameIsInProgress && !gameHasEnded && !isOutOfTime
        ? 'START'
        : (gameIsInProgress && gameHasEnded) || isOutOfTime
        ? 'RESTART GAME'
        : 'IN PROGRESS'}
    </div>
  )
}

export default Button
