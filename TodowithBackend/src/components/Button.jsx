import React from 'react'

function Button({onClick,text,color,fontColor}) {
  return (
   <button onClick={onClick} className='p-2 border-2 border-black shadow-sm flex justify-center items-center cursor-pointer text-xl font-bold shadow-red-600 rounded-md' style={{backgroundColor:color,color:fontColor}}>{text}</button>
  )
}

export default Button