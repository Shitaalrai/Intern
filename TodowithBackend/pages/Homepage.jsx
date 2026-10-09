import React, { useState } from 'react'
import NavBar from '../src/components/NavBar'
import Cardsection from '../src/components/Cardsection'
import { ToastContainer } from 'react-toastify'

function Homepage() {

  return (

   <div className=" pb-20 pt-10   px-15 ">
      <div className="flex flex-col gap-2">
        <NavBar />
        <Cardsection  />
       <ToastContainer  position='bottom-right' autoClose={2000}/> 
      </div>
    </div>
  )
}

export default Homepage