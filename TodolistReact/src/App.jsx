import React, { use, useState } from 'react'
import { Route, Router, BrowserRouter} from 'react-router-dom'
import Button from './components/Button'
import NavBar from './components/NavBar'
import Cardsection from './components/Cardsection'
import Form from './components/Form'

function App() {

  return (
    <div className='bg-gray-600 h-screen flex justify-center items-center p-3 flex-col gap-2'>
      <div className='bg-amber-100 p-5 border-2 rounded-xl shadow-lg shadow-gray-700'>
          <NavBar/>
          <Cardsection/>
          {/* <Form/> */}
      </div>
    </div>
   
  )
}

export default App
