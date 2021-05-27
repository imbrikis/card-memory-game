import React, { useContext } from 'react'
import Card from './Card'
import { CardsContext } from './CardsContext'

const CardsContainer = () => {
  const [cards] = useContext(CardsContext)

  const cardsPlaceholder = []

  if (!cards) {
    for (let x = 0; x < 18; x++) {
      cardsPlaceholder.push(
        <Card key={Math.floor(Math.random() * 1000000) + 1} />
      )
    }
  }

  const renderedCards = cards.length > 0 ? cards : cardsPlaceholder

  return (
    <div className='w-full flex-grow'>
      <div className='h-full mx-auto grid grid-cols-6 grid-rows-3'>
        {renderedCards}
      </div>
    </div>
  )
}

export default CardsContainer
