
import React from 'react'

function Buttons({text,onClick}) {
  return (
    <button onClick={onClick} className='border-2 w-8 h-lg bg-gray-400 text-xl cursor-pointer text-center'>{text}</button>
  )
}

export default Buttons