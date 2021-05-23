import React, { useEffect, useState } from 'react'

const Timer = ({ initiateTimer }) => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    if (initiateTimer) {
      setTimer(60)
    }

    return () => {
      setTimeout(() => {
        let x = timer - 1
        setTimer(x)
      }, 1000)
    }
  }, [initiateTimer])

  return (
    <div className='inline-block'>
      <h1 className='text-4xl bg-gray-200 px-4'>{timer} s</h1>
    </div>
  )
}

export default Timer
