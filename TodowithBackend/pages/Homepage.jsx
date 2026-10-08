import React, { useState } from 'react'
import NavBar from '../src/components/NavBar'
import Cardsection from '../src/components/Cardsection'

function Homepage() {

  return (

   <div className=" pb-20 pt-10 flex justify-center items-center px-15 flex-col gap-2">
      <div className="flex flex-col gap-2">
        <NavBar />
        <Cardsection  />
      </div>
    </div>
  )
}

export default Homepage