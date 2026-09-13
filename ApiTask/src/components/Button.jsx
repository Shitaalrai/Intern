import React from 'react'

function Button({buttonName,textColor}) {
  return (
    <div>
        <button className='p-1 font-bold cursor-pointer ' style={{color:textColor}}>{buttonName}</button>
    </div>
  )
}

export default Button