import React from 'react'

const Info = ({ gameIsInProgress }) => {
  return (
    <div className='h-20 w-full flex justify-center items-center'>
      <h1 className='text-6xl'>
        {!gameIsInProgress ? "Click 'START' to begin" : 'Start guessing!'}
      </h1>
    </div>
  )
}

export default Info
