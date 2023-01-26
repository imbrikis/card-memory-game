import React, { createContext, useState } from 'react'

export const GameContext = createContext()

export const GameContextProvider = (props) => {
  const { children } = props
  const [gameIsInProgress, setGameIsInProgress] = useState(false)

  return (
    <GameContext.Provider
      value={{
        gameIsInProgress,
        setGameIsInProgress,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
