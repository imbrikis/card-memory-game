import React, { useEffect, useState, useContext } from 'react'
import { CardsContext } from './CardsContext'

const Timer = ({ initiateTimer, outOfTime, gameHasEnded }) => {
  const { _gameIsInProgress } = useContext(CardsContext)
  const [gameIsInProgress, setGameIsInProgress] = _gameIsInProgress
  // set the timer - change value for seconds
  const [timer, setTimer] = useState(45)

  useEffect(() => {
    let countdown

    if (initiateTimer && timer !== 0) {
      countdown = setInterval(() => setTimer(timer - 1), 1000)
    } else if (initiateTimer && timer === 0) {
      outOfTime()
      setGameIsInProgress(false)
    }

    if (initiateTimer && timer > 0) {
      return () => {
        clearInterval(countdown)
      }
    } else if (gameHasEnded || (!initiateTimer && timer === 0)) {
      return () => {
        setTimer(45)
      }
    }
  }, [initiateTimer, timer, gameHasEnded])

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
