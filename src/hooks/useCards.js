import { useState, useEffect, useCallback } from 'react'
import { shuffleCards } from '../helpers/ShuffleCards'

export const useCards = (imageAmount) => {
  const [cards, setCards] = useState([])
  const [fetchIsInFlight, setFetchIsInFlight] = useState(true)

  const setCardsWithIndex = useCallback(
    (index) => {
      const cardsCopy = cards.map((card) => {
        return Object.assign({}, card)
      })
      cardsCopy[index].hasBeenFlipped = true

      setCards(cardsCopy)
    },
    [cards]
  )

  const _fetchCards = useCallback(async () => {
    let fetchedCards = []

    for (let x = 0; x < imageAmount; x++) {
      const { url } = await fetch('https://source.unsplash.com/random/&' + x)
      fetchedCards.push({ image: url, linkNum: x + 1 })
    }

    const shuffledCards = shuffleCards(fetchedCards)

    setFetchIsInFlight(false)
    setCards(shuffledCards)
  }, [imageAmount])

  const fetchCards = useCallback(() => {
    setFetchIsInFlight(true)
    _fetchCards()
  }, [_fetchCards])

  useEffect(() => {
    fetchCards()
  }, [fetchCards])

  return { cards, fetchCards, fetchIsInFlight, setCards, setCardsWithIndex }
}
