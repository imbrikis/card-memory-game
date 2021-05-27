import React, { createContext, useState } from 'react'

export const CardsContext = createContext()

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([])
  const [gameIsInProgress, setGameIsInProgress] = useState(false)
  const [chosenCards, setChosenCards] = useState(0)

  return (
    <CardsContext.Provider
      value={
        ([cards, setCards],
        [gameIsInProgress, setGameIsInProgress],
        [chosenCards, setChosenCards])
      }
    >
      {children}
    </CardsContext.Provider>
  )
}
