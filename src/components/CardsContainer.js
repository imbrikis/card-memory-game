import React, { useContext, useEffect } from 'react'
import Card from './Card'
import { CardsContext } from '../context/CardsContext'
import { GameContext } from '../context/GameContext'

const CardsContainer = (props) => {
  const { endTheGame } = props

  const { cards, flippedCards, numUniqueCards, setCards, setFlippedCards } =
    useContext(CardsContext)
  const { gameIsInProgress } = useContext(GameContext)

  const cardsPlaceholder = []

  if (!cards || cards.length === 0) {
    for (let x = 0; x < numUniqueCards * 2; x++) {
      const emptyCard = { image: '', linkNum: 0, hasBeenFlipped: false, key: 0 }
      cardsPlaceholder.push(
        <Card key={Math.floor(Math.random() * 1000000) + 1} card={emptyCard} />
      )
    }
  }

  const renderedCards = cards
    ? cards.map((card, i) => {
        return <Card card={card} key={card.key} index={i} />
      })
    : []

  const renderedData =
    renderedCards.length > 0 ? renderedCards : cardsPlaceholder

  useEffect(() => {
    const checkIfAllCardsAreFlipped = () => {
      if (gameIsInProgress) {
        const checkAllCards = cards.filter((card) => {
          return card.hasBeenFlipped === false
        })

        if (checkAllCards.length === 0) {
          endTheGame()
        }
      }
    }
    checkIfAllCardsAreFlipped()

    // Check if 2 cards have been flipped
    if (flippedCards.length === 2) {
      // Check if flipped cards match
      if (flippedCards[0].linkNum === flippedCards[1].linkNum) {
        // remove the cards from the temporary array
        // and leave them flipped in the permanent cards array
        setFlippedCards([])
      } else {
        // otherwise, make a copy of the cards array with the reverted changes
        // and push that to the cards array
        const cardsCopy = cards.map((card) => {
          return Object.assign({}, card)
        })
        flippedCards.forEach((flippedCard) => {
          cardsCopy.forEach((card) => {
            if (flippedCard.linkNum === card.linkNum) {
              card.hasBeenFlipped = false
            }
          })
        })

        const resetData = () => {
          setCards(cardsCopy)
          setFlippedCards([])
        }

        setTimeout(resetData, 500)
      }
    }
  }, [
    cards,
    flippedCards,
    endTheGame,
    gameIsInProgress,
    setFlippedCards,
    setCards,
  ])

  return (
    <div className='w-full flex-grow'>
      <div className='h-full mx-auto grid grid-cols-3 grid-rows-6 sm:grid-cols-6 sm:grid-rows-3'>
        {renderedData}
      </div>
    </div>
  )
}

export default CardsContainer
