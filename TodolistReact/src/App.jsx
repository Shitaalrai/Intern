// import React, { use, useState } from 'react'
// import { Route, Router, BrowserRouter} from 'react-router-dom'
// import Button from './components/Button'
// import NavBar from './components/NavBar'
// import Cardsection from './components/Cardsection'
// import Form from './components/Form'

// function App() {

//   return (
//     <div className='bg-gray-600 h-screen flex justify-center items-center p-3 flex-col gap-2'>
//       <div className='bg-amber-100 p-5 border-2 rounded-xl shadow-lg shadow-gray-700'>
//           <NavBar/>
//           <Cardsection/>
//           {/* <Form/> */}
//       </div>
//     </div>
   
//   )
// }

// export default App

import React, { useState } from "react";

import NavBar from "./components/NavBar";
import Cardsection from "./components/Cardsection";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

const deleteTodo = (index) => {
  setTodos((prev) => prev.filter((_, i) => i !== index));
};

const editTodo = (index, updatedTodo) => {
  console.log(updatedTodo);
  
  // setTodos((prev) =>
  //   prev.map((todo, i) =>
  //     i === index ? updatedTodo : todo
  //   )
  // );
};

  return (
    <div className="bg-gray-600 h-screen flex justify-center items-center p-3 flex-col gap-2">
      <div className="bg-amber-100 p-5 border-2 rounded-xl shadow-lg shadow-gray-700">

        <NavBar addTodo={addTodo} />

        <Cardsection todos={todos}
         deleteTodo={deleteTodo}
        editTodo={editTodo} />
      </div>
    </div>
  );
}

export default App;