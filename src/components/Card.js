import React, { useState, useContext } from 'react'
import { CardsContext } from './CardsContext'

const Card = ({ image, linkNum, hasBeenRevealed, hasBeenFlipped, index }) => {
  const { _cards } = useContext(CardsContext)
  const [cards, setCards] = _cards
  const { _gameIsInProgress } = useContext(CardsContext)
  const [gameIsInProgress, setGameIsInProgress] = _gameIsInProgress
  const { _flippedCards } = useContext(CardsContext)
  const [flippedCards, setFlippedCards] = _flippedCards

  const handleClick = () => {
    console.log(gameIsInProgress, hasBeenFlipped)
    if (gameIsInProgress && !hasBeenFlipped) {
      console.log('running click')
      const tempCards = cards
      cards[index].hasBeenFlipped = true
      setCards([...tempCards])
      setFlippedCards([...flippedCards, linkNum])
    }
  }

  return (
    <div className={`flex items-center justify-center relative`}>
      <div
        className={`w-32 h-44 inline-block border-4 ${
          gameIsInProgress
            ? 'bg-gray-300 border-gray-500'
            : 'bg-gray-100 border-gray-300 text-gray-300'
        } card-front ${gameIsInProgress && 'cursor-pointer'} ${
          (hasBeenFlipped || hasBeenRevealed) && 'clicked-card-front'
        }`}
        onClick={
          !hasBeenFlipped ? handleClick : console.log('cannot do the thing')
        }
      >
        <div className='h-full flex items-center justify-center text-3xl'>
          {linkNum}
        </div>
      </div>
      <div
        className={`absolute w-32 h-44 inline-block bg-gray-500 border-4 border-gray-500 card-back ${
          gameIsInProgress && 'cursor-pointer'
        } ${(hasBeenFlipped || hasBeenRevealed) && 'clicked-card-back'}`}
        onClick={
          !hasBeenFlipped ? handleClick : console.log('cannot do the thing')
        }
      >
        <div
          className='w-full h-full bg-center bg-cover bg-no-repeat'
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
    </div>
  )
}

export default Card
