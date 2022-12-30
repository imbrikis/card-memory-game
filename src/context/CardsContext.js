import React, { createContext, useState } from 'react'
import { useCards } from '../hooks/useCards'

export const CardsContext = createContext()

export const CardsProvider = ({ children }) => {
  const numUniqueCards = 9
  const { cards, fetchCards, setCards } = useCards(numUniqueCards)
  const [flippedCards, setFlippedCards] = useState([])

  return (
    <CardsContext.Provider
      value={{
        cards,
        fetchCards,
        flippedCards,
        numUniqueCards,
        setCards,
        setFlippedCards,
      }}
    >
      {children}
    </CardsContext.Provider>
  )
}
