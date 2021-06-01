let cards = [
  {
    image:
      'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    linkNum: 1,
  },
  {
    image:
      'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    linkNum: 2,
  },
  {
    image:
      'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    linkNum: 3,
  },
  {
    image:
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    linkNum: 4,
  },
  {
    image:
      'https://images.unsplash.com/photo-1574231164645-d6f0e8553590?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
    linkNum: 5,
  },
  {
    image:
      'https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    linkNum: 6,
  },
  {
    image:
      'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    linkNum: 7,
  },
  {
    image:
      'https://images.unsplash.com/photo-1455970022149-a8f26b6902dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=648&q=80',
    linkNum: 8,
  },
  {
    image:
      'https://images.unsplash.com/photo-1548366086-7f1b76106622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=624&q=80',
    linkNum: 9,
  },
]

export const shuffleCards = () => {
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
  extendedCards.forEach((card) => {
    let randomNum = Math.floor(Math.random() * 1000000) + 1
    card.key = randomNum
    card.hasBeenRevealed = false
    card.hasBeenFlipped = false
  })

  // shuffle the array
  for (let count = 0; count < cards.length; count++) {
    let randomNum = Math.floor(Math.random() * extendedCards.length)
    let tempItem = extendedCards[count]
    let chosenItem = extendedCards[randomNum]
    extendedCards[randomNum] = tempItem
    extendedCards[count] = chosenItem
  }

  return extendedCards
}
