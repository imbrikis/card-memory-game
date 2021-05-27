import React, { useContext } from 'react'
import Card from './Card'
import { CardsContext } from './CardsContext'

const CardsContainer = () => {
  const { _cards } = useContext(CardsContext)
  const [cards, setCards] = _cards

  const cardsPlaceholder = []

  console.log(cards)

  if (!cards || cards.length === 0) {
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
