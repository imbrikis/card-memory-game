import { useState, useEffect, useCallback } from 'react'
import { shuffleCards } from '../helpers/ShuffleCards'

export const useCards = (imageAmount) => {
  const [cards, _setCards] = useState([])

  const setCards = useCallback(
    (index) => {
      const cardsCopy = cards.map((card) => {
        return Object.assign({}, card)
      })
      cardsCopy[index].hasBeenFlipped = true

      _setCards(cardsCopy)
    },
    [cards]
  )

  const fetchCards = useCallback(async () => {
    let fetchedCards = []

    for (let x = 0; x < imageAmount; x++) {
      const { url } = await fetch('https://source.unsplash.com/random/&' + x)
      fetchedCards.push({ url })
    }

    const shuffledCards = shuffleCards(fetchedCards)

    console.log(
      `%c shuffledCards:`,
      'background:yellow;color:black',
      shuffledCards
    )

    _setCards(shuffledCards)
  }, [imageAmount])

  useEffect(() => {
    fetchCards()
  }, [fetchCards])

  return { cards, fetchCards, setCards }
}
