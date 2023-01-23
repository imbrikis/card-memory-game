import create from 'zustand'
import { useCards } from '../hooks/useCards'

const numUniqueCards = 9

export const useStore = create((set) => {
  const { cards, fetchCards, fetchIsInFlight, setCards, setCardsWithIndex } =
    useCards(numUniqueCards)

  return {
    cards,
    fetchCards,
    fetchIsInFlight,
    setCards,
    setCardsWithIndex,
    flippedCards: [],
    setFlippedCards: (newCard) =>
      set((state) => ({ flippedCards: [...state.flippedCards, newCard] })),
  }
})
