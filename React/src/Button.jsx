import React from 'react'

const Button = ({ButtonName}) => {
  return (
    <button className='bg-blue-500 px-4 py-4 rounded-2xl text-black border-2 border-black cursor-pointer hover:bg-red-500'>{ButtonName} </button>
  )
}

export default Button
// style={{backgroundColor:color}}