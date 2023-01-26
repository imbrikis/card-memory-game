import React, { createContext, useState } from 'react'
import { useCards } from '../hooks/useCards'

export const CardsContext = createContext()

export const CardsProvider = (props) => {
  const { children } = props
  const numUniqueCards = 9
  const { cards, fetchCards, fetchIsInFlight, setCards, flipFaceUp } =
    useCards(numUniqueCards)
  const [flippedCards, setFlippedCards] = useState([])

  // const unrevealFlippedCards = (_cards) => {
  //   const [card1, card2] = _cards

  //   const cardsCopy = cards.map((card) => {
  //     return Object.assign({}, card)
  //   })

  //   for (let card of cardsCopy) {
  //     if (card.key === card1.key || card.key === card2.key) {
  //       card.hasBeenFlipped = true
  //     }
  //   }

  //   setTimeout(setCards(cardsCopy), 500)
  // }

  return (
    <CardsContext.Provider
      value={{
        cards,
        fetchCards,
        fetchIsInFlight,
        flippedCards,
        numUniqueCards,
        setCards,
        flipFaceUp,
        setFlippedCards,
        // unrevealFlippedCards,
      }}
    >
      {children}
    </CardsContext.Provider>
  )
}
