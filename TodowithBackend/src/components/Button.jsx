import React from 'react'

function Button({onClick,text,color,fontColor}) {
  return (
   <button onClick={onClick} className='p-1 border-2 border-black shadow-sm cursor-pointer font-bold shadow-red-600 rounded-md' style={{backgroundColor:color,color:fontColor}}>{text}</button>
  )
}

export default Button