import React, { useContext } from 'react'
import { CardsContext } from '../context/CardsContext'
import { GameContext } from '../context/GameContext'

const Card = (props) => {
  const { image, linkNum, hasBeenFlipped, index } = props

  const { setCardsWithIndex, flippedCards, setFlippedCards } =
    useContext(CardsContext)
  const { gameIsInProgress } = useContext(GameContext)

  const handleClick = () => {
    if (gameIsInProgress && !hasBeenFlipped) {
      setCardsWithIndex(index)
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
          hasBeenFlipped && 'clicked-card-front'
        }`}
        onClick={
          !hasBeenFlipped && gameIsInProgress && flippedCards.length < 2
            ? handleClick
            : null
        }
      >
        <div className='h-full flex items-center justify-center text-3xl'>
          ?
        </div>
      </div>
      <div
        className={`absolute w-32 h-44 inline-block bg-gray-500 border-4 border-gray-500 card-back ${
          gameIsInProgress && 'cursor-pointer'
        } ${hasBeenFlipped && 'clicked-card-back'}`}
        onClick={!hasBeenFlipped && gameIsInProgress ? handleClick : null}
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
