import React, { createContext, useState } from 'react'

export const CardsContext = createContext()

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([])
  const [gameIsInProgress, setGameIsInProgress] = useState(false)
  const [flippedCards, setFlippedCards] = useState([])

  return (
    <CardsContext.Provider
      value={{
        _cards: [cards, setCards],
        _gameIsInProgress: [gameIsInProgress, setGameIsInProgress],
        _flippedCards: [flippedCards, setFlippedCards],
      }}
    >
      {children}
    </CardsContext.Provider>
  )
}
