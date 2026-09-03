import React from 'react'

function Dynamics({placeholderName, type}) {
  return (
     <input 
            type={type}
            placeholder={placeholderName}
            className='border-2 h-xl w-sm text-center bg-amber-400 rounded-xl px-3 py-3 hover:bg-blue-500 cursor-pointer'
        />
  )
}
export default Dynamics