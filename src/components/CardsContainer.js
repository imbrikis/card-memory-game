import React, { useContext, useEffect } from 'react'
import Card from './Card'
import { CardsContext } from './CardsContext'

const CardsContainer = ({ hasWonGame }) => {
  const { _gameIsInProgress } = useContext(CardsContext)
  const [gameIsInProgress] = _gameIsInProgress
  const { _cards } = useContext(CardsContext)
  const [cards, setCards] = _cards
  const { _flippedCards } = useContext(CardsContext)
  const [flippedCards, setFlippedCards] = _flippedCards

  const cardsPlaceholder = []

  if (!cards || cards.length === 0) {
    for (let x = 0; x < 18; x++) {
      cardsPlaceholder.push(
        <Card key={Math.floor(Math.random() * 1000000) + 1} />
      )
    }
  }

  const renderedCards = cards.map((card, i) => {
    return (
      <Card
        image={card.image}
        linkNum={card.linkNum}
        hasBeenRevealed={card.hasBeenRevealed}
        hasBeenFlipped={card.hasBeenFlipped}
        key={card.key}
        index={i}
      />
    )
  })

  const renderedData =
    renderedCards.length > 0 ? renderedCards : cardsPlaceholder

  console.log(gameIsInProgress)

  const checkIfAllCardsAreFlipped = () => {
    if (gameIsInProgress) {
      const checkAllCards = cards.filter((card) => {
        return card.hasBeenFlipped === false
      })

      console.log(checkAllCards)

      if (checkAllCards.length === 0) {
        hasWonGame()
      }
    }
  }

  useEffect(() => {
    checkIfAllCardsAreFlipped()

    console.log(flippedCards)
    if (flippedCards.length === 2 && flippedCards[0] === flippedCards[1]) {
      console.log('They match')
      setFlippedCards([])
    } else if (
      flippedCards.length === 2 &&
      flippedCards[0] !== flippedCards[1]
    ) {
      console.log('They DO NOT match')

      const tempCards = cards
      flippedCards.forEach((flippedCard) => {
        tempCards.forEach((card) => {
          if (flippedCard === card.linkNum) {
            card.hasBeenFlipped = false
          }
        })
      })

      const resetData = () => {
        setCards(tempCards)
        setFlippedCards([])
      }

      setTimeout(resetData, 500)
    }
  }, [flippedCards])

  return (
    <div className='w-full flex-grow'>
      <div className='h-full mx-auto grid grid-cols-6 grid-rows-3'>
        {renderedData}
      </div>
    </div>
  )
}

export default CardsContainer
