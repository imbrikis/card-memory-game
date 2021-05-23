import React from 'react'
import Timer from './Timer'
import Button from './Button'
import CardsContainer from './CardsContainer'
import Info from './Info'

const Layout = () => {
  return (
    <div>
      <h1>Remaining Time</h1>
      <Timer />
      <Button />
      <CardsContainer />
      <Info />
    </div>
  )
}

export default Layout
