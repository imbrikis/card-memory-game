import React, { useEffect, useState } from 'react'

const Timer = ({ initiateTimer, outOfTime }) => {
  // set the timer - change value for seconds
  const [timer, setTimer] = useState(30)

  useEffect(() => {
    let countdown

    if (initiateTimer && timer !== 0) {
      countdown = setInterval(() => setTimer(timer - 1), 1000)
    } else if (initiateTimer && timer === 0) {
      outOfTime()
    }

    if (initiateTimer) {
      return () => {
        clearInterval(countdown)
      }
    }
  }, [initiateTimer, timer])

  return (
    <div className='inline-block'>
      <h1
        className={`text-4xl bg-gray-200 px-4 ${
          initiateTimer ? 'text-black' : 'text-gray-400'
        }`}
      >
        {timer} s
      </h1>
    </div>
  )
}

export default Timer
