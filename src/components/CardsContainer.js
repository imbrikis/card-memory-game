import React from 'react'
import Card from './Card'

const CardsContainer = () => {
  const cards = []
  for (let x = 0; x < 18; x++) {
    cards.push(<Card />)
  }

  console.log(cards)
  return (
    <div className='w-full flex-grow'>
      <div className='h-full mx-auto grid grid-cols-6 grid-rows-3'>{cards}</div>
    </div>
  )
}

export default CardsContainer
