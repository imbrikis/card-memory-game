import React, { useEffect, useState, useContext } from 'react'
import { GameContext } from '../context/GameContext'

const Timer = (props) => {
  const { initiateTimer, timesUp, gameHasEnded } = props

  const { setGameIsInProgress } = useContext(GameContext)
  // set the timer - change value for seconds
  const [timer, setTimer] = useState(45)

  useEffect(() => {
    let countdown

    if (initiateTimer && timer !== 0) {
      countdown = setInterval(() => setTimer(timer - 1), 1000)
    } else if (initiateTimer && timer === 0) {
      timesUp()
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
  }, [initiateTimer, timer, gameHasEnded, timesUp, setGameIsInProgress])

  return (
    <div className='flex items-center pr-2 xl:pr-0'>
      <div className='inline-block text-base xl:text-4xl md:text-2xl sm:text-xl mr-2'>
        Time:
      </div>
      <h1
        className={`inline-block w-10 text-xs text-center xl:text-4xl md:text-xl sm:text-lg bg-gray-200 px-1 xl:px-2 ${
          initiateTimer ? 'text-black' : 'text-gray-400'
        }`}
      >
        {timer} s
      </h1>
    </div>
  )
}

export default Timer
