// Attempt at getting random images to populate the Cards array from Unsplash
// let cards = []

// const getImages = async () => {
//   for (let x = 0; x < 9; x++) {
//     const res = await fetch('https://source.unsplash.com/random')
//     const data = res
//     cards.push({ image: data.url, linkNum: x + 1 })
//     console.log(data)
//   }
// }
// getImages()

// console.log(cards)

let cards = [
  {
    image:
      'https://images.unsplash.com/photo-1547721064-da6cfb341d50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    linkNum: 1,
  },
  {
    image:
      'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
    linkNum: 2,
  },
  {
    image:
      'https://images.unsplash.com/flagged/photo-1552345301-833de8c1e8c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    linkNum: 3,
  },
  {
    image:
      'https://images.unsplash.com/photo-1572317708804-41107920bee5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=638&q=80',
    linkNum: 4,
  },
  {
    image:
      'https://images.unsplash.com/photo-1551888419-7b7a520fe0ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    linkNum: 5,
  },
  {
    image:
      'https://images.unsplash.com/photo-1604962052822-eb6259a4c10a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    linkNum: 6,
  },
  {
    image:
      'https://images.unsplash.com/photo-1567334314101-26f2e7658aa0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    linkNum: 7,
  },
  {
    image:
      'https://images.unsplash.com/photo-1567608346847-6d9817e63e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80',
    linkNum: 8,
  },
  {
    image:
      'https://images.unsplash.com/photo-1533177243638-dd485701f717?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
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
