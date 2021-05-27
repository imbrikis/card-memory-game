import React, { useState, useContext } from 'react'
import { CardsContext } from './CardsContext'

const Card = ({ image, linkNum, hasBeenRevealed }) => {
  const [clicked, setClicked] = useState(false)
  const [selected, setSelected] = useState(false)

  const { _gameIsInProgress } = useContext(CardsContext)
  const [gameIsInProgress, setGameIsInProgress] = _gameIsInProgress
  const { _flippedCards } = useContext(CardsContext)
  const [flippedCards, setFlippedCards] = _flippedCards

  const handleClick = () => {
    if (gameIsInProgress && !selected) {
      setClicked(!clicked)
      // checkFlippedCards(linkNum)
      setSelected(true)
    }
  }

  // const checkFlippedCards = (selectedCard) => {
  //   if (flippedCards.length < 2) {
  //     setFlippedCards(...flippedCards, selectedCard)
  //     console.log(flippedCards)
  //   }
  // }

  console.log(gameIsInProgress)

  return (
    <div className={`flex items-center justify-center relative`}>
      <div
        className={`w-32 h-44 inline-block border-4 ${
          gameIsInProgress
            ? 'bg-gray-300 border-gray-500'
            : 'bg-gray-100 border-gray-300 text-gray-300'
        } card-front ${gameIsInProgress && 'cursor-pointer'} ${
          (clicked || hasBeenRevealed) && 'clicked-card-front'
        }`}
        onClick={handleClick}
      >
        <div className='h-full flex items-center justify-center text-3xl'>
          ?
        </div>
      </div>
      <div
        className={`absolute w-32 h-44 inline-block bg-gray-500 border-4 border-gray-500 card-back ${
          gameIsInProgress && 'cursor-pointer'
        } ${(clicked || hasBeenRevealed) && 'clicked-card-back'}`}
        onClick={handleClick}
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
