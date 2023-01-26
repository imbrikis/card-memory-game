export const shuffleCards = (cards) => {
  // create a new array for a copy of the Cards array
  const cards2 = []

  // iterate over the Cards array and create a new copy
  for (let x = 0; x < cards.length; x++) {
    cards2[x] = {}
    for (let prop in cards[x]) {
      cards2[x][prop] = cards[x][prop]
    }
  }

  // combine the Cards array and Cards array copy
  const extendedCards = [...cards, ...cards2]

  // add a key to each item in the array, as well as other metadata
  const uniqueCardId = Math.floor(Math.random() * 1000000) + 1

  extendedCards.forEach((card, i) => {
    card.key = uniqueCardId + i
    card.hasBeenFlipped = false
  })

  // shuffle the array
  for (let count = 0; count < cards.length; count++) {
    const randomNum = Math.floor(Math.random() * extendedCards.length)
    const tempItem = extendedCards[count]
    const chosenItem = extendedCards[randomNum]
    extendedCards[randomNum] = tempItem
    extendedCards[count] = chosenItem
  }

  return extendedCards
}
