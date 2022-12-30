import React, { useEffect, useState, useContext } from 'react'
import { GameContext } from '../context/GameContext'

const Timer = (props) => {
  const { initiateTimer, outOfTime, gameHasEnded } = props

  const { setGameIsInProgress } = useContext(GameContext)
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
  }, [initiateTimer, timer, gameHasEnded, outOfTime, setGameIsInProgress])

  return (
    <div className='flex items-center'>
      <div className='inline-block text-4xl mr-2'>Time:</div>
      <h1
        className={`inline-block text-4xl bg-gray-200 px-2 ${
          initiateTimer ? 'text-black' : 'text-gray-400'
        }`}
      >
        {timer} s
      </h1>
    </div>
  )
}

export default Timer
