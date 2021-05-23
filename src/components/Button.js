import React from 'react'

const Button = ({ startGame, gameIsInProgress }) => {
  const handleClick = () => {
    !gameIsInProgress && startGame()
  }

  return (
    <div
      className={`inline-block w-72 h-16 rounded-xl text-4xl flex justify-center items-center ${
        !gameIsInProgress
          ? 'bg-green bg-opacity-40 cursor-pointer hover:bg-opacity-100'
          : 'bg-gray-100'
      }`}
      onClick={handleClick}
    >
      {!gameIsInProgress ? 'START' : 'IN PROGRESS'}
    </div>
  )
}

export default Button
