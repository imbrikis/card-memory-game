import React, { createContext, useState } from 'react'
import { useCards } from '../hooks/useCards'

export const CardsContext = createContext()

export const CardsProvider = ({ children }) => {
  const numUniqueCards = 9
  const { cards, fetchCards, fetchIsInFlight, setCards, setCardsWithIndex } =
    useCards(numUniqueCards)
  const [flippedCards, setFlippedCards] = useState([])

  return (
    <CardsContext.Provider
      value={{
        cards,
        fetchCards,
        fetchIsInFlight,
        flippedCards,
        numUniqueCards,
        setCards,
        setCardsWithIndex,
        setFlippedCards,
      }}
    >
      {children}
    </CardsContext.Provider>
  )
}
