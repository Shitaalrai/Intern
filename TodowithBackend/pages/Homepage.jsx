import React, { useState } from 'react'
import NavBar from '../src/components/NavBar'
import Cardsection from '../src/components/Cardsection'

function Homepage() {

  return (

   <div className=" pb-20 flex justify-center items-center p-3 flex-col gap-2">
      <div className="flex flex-col gap-2">
        <NavBar />
        <Cardsection  />
      </div>
    </div>
  )
}

export default Homepage