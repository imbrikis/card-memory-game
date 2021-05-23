import React, { useState } from 'react'

const Card = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <div className={`flex items-center justify-center relative`}>
      <div
        className={`w-32 h-44 inline-block bg-gray-300 border-4 border-gray-500 card-front ${
          clicked && 'clicked-card-front'
        }`}
        onClick={() => setClicked(!clicked)}
      >
        <div className='h-full flex items-center justify-center'>CARD</div>
      </div>
      <div
        className={`absolute w-32 h-44 inline-block bg-gray-300 border-4 border-gray-500 card-back ${
          clicked && 'clicked-card-back'
        }`}
        onClick={() => setClicked(!clicked)}
      >
        <div className='h-full flex items-center justify-center'>BACKSIDE</div>
      </div>
    </div>
  )
}

export default Card
