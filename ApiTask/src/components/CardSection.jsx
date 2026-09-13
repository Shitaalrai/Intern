import React from 'react'
import Card from './Card'

function CardSection() {
  return (
    <div className='grid grid-cols-4 gap-4 justify-center items-center bg-gray-800 p-6'>
      <Card/>
    </div>
  )
}

export default CardSection