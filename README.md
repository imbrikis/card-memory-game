<h1 align="center">
  <a href="https://imb-card-memory-game.netlify.app/">Card Memory Game</a>
</h1>

<h3 align="center">Made with React and Tailwind</h3>
<br />

Card Memory is a game where you have to click on a card to see what image is underneath it and try to find the matching image underneath the other cards.

- The user can see a grid with 18 cards. All the cards are faced down initially (hasBeenFlipped state set to false)
- User can click a button to start the game. When this button is clicked, a timer will start
- User can click on any card to unveil the image that is underneath it (change hasBeenFlipped state to true). The image will be displayed until the user clicks on a 2nd card
- When the User clicks on the 2nd card:
- If there is a match, the 2 cards will be eliminated from the game (leave them in the flipped state)
- If there isn’t a match, the 2 cards will flip back to their original state (hasBeenFlipped set to false)
- When all the matches have been found, the User is congratulated and has the option to restart the game with a newly shuffled deck

![image](https://user-images.githubusercontent.com/7816525/156109002-f1ef842d-4ed2-4363-afb2-4e932d277288.png)
### [SEE DEMO!!!](https://imb-card-memory-game.netlify.app/)

### Current Issues

- Users can click on another card during the half second it takes for the other cards to flip over: This causes a 3rd card to stay in a flipped over state
- This application only works on desktop at the moment

### Future Features

- High Score tracking
- Random image generation
- Display all cards after a loss and highlight the ones missed
