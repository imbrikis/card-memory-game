import create from 'zustand'
import { shuffleCards } from '../helpers/ShuffleCards'

const searchStrings = ['colorful', 'abstract', 'fluid', 'trippy', 'cats']

export const useStore = create((set, get) => {
  const fetchCards = async (imageCount) => {
    const randomString =
      searchStrings[Math.floor(Math.random() * searchStrings.length)]
    let fetchedCards = []

    for (let x = 0; x < imageCount; x++) {
      const { url } = await fetch(
        `https://source.unsplash.com/random/?${randomString}&${x}`
      )
      fetchedCards.push({ image: url, linkNum: x + 1 })
    }

    const shuffledCards = shuffleCards(fetchedCards)

    set(() => ({ cards: shuffledCards, fetchIsInFlight: false }))
  }

  const setCardsWithIndex = (index) => {
    const cardsCopy = get().cards.map((card) => {
      return Object.assign({}, card)
    })
    cardsCopy[index].hasBeenFlipped = true

    set(() => ({ cards: cardsCopy }))
  }

  return {
    cards: [],
    fetchCards,
    fetchIsInFlight: true,
    gameIsInProgress: false,
    numUniqueCards: 9,
    setCards: (newCards) => set(() => ({ cards: newCards })),
    setCardsWithIndex,
    setGameIsInProgress: () =>
      set((isGameInProgress) => ({ gameIsInProgress: isGameInProgress })),
    flippedCards: [],
    setFlippedCards: (newCards) => set(() => ({ flippedCards: newCards })),
  }
})
