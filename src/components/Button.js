import React, { useContext } from 'react'
import { shuffleCards } from './ShuffleCards'
import { CardsContext } from './CardsContext'

const Button = ({ startGame }) => {
  const { _cards } = useContext(CardsContext)
  const [cards, setCards] = _cards
  const { _gameIsInProgress } = useContext(CardsContext)
  const [gameIsInProgress, setGameIsInProgress] = _gameIsInProgress

  const handleClick = () => {
    if (!gameIsInProgress) {
      setGameIsInProgress(true)
      let shuffledCards = shuffleCards()
      setCards(shuffledCards)
      startGame()
    }
  }

  return (
    <div
      className={`inline-block w-72 h-16 rounded-xl text-4xl flex justify-center items-center ${
        !gameIsInProgress
          ? 'bg-green bg-opacity-40 cursor-pointer hover:bg-opacity-100'
          : 'bg-gray-100'
      }`}
      onClick={handleClick}
    >
      {!gameIsInProgress ? 'START' : 'IN PROGRESS'}
    </div>
  )
}

export default Button
