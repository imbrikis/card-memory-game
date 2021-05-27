import Card from './Card'

let cards = [
  {
    image:
      'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    linkNum: 1,
    hasBeenRevealed: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    linkNum: 2,
    hasBeenRevealed: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    linkNum: 3,
    hasBeenRevealed: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    linkNum: 4,
    hasBeenRevealed: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1574231164645-d6f0e8553590?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
    linkNum: 5,
    hasBeenRevealed: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    linkNum: 6,
    hasBeenRevealed: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    linkNum: 7,
    hasBeenRevealed: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1455970022149-a8f26b6902dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=648&q=80',
    linkNum: 8,
    hasBeenRevealed: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1548366086-7f1b76106622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=624&q=80',
    linkNum: 9,
    hasBeenRevealed: false,
  },
]

export const shuffleCards = () => {
  let cardComponents = []
  cards = [...cards, ...cards]
  for (let count = 0; count < cards.length; count++) {
    let randomNum = Math.floor(Math.random() * cards.length)
    let tempItem = cards[count]
    let chosenItem = cards[randomNum]
    cards[randomNum] = tempItem
    cards[count] = chosenItem
  }

  for (let count = 0; count < cards.length; count++) {
    cardComponents.push(
      <Card
        image={cards[count].image}
        linkNum={cards[count].linkNum}
        hasBeenRevealed={cards[count].hasBeenRevealed}
        key={Math.floor(Math.random() * 1000000) + 1}
      />
    )
  }
  return cardComponents
}
