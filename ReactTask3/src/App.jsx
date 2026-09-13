import React, { useEffect, useState } from 'react'
import Buttons from './components/Buttons';

function App() {

  const [count,setcount] = useState(0);
  const increment =() =>{
    setcount(count + 1);
  }
 useEffect(() => {
    console.log(count);
    }, [count]);

  const decrement =() =>{
    setcount(count - 1);
  }
  const value= (e)=>{
    console.log(e.target.value);
    
  }

  return (
    <div className='flex gap-4 '>
      <Buttons onClick={increment} text={"+"}/>
      <h1>{count}</h1>
      <Buttons onClick={decrement} text={"-"}/>
      <input type='text' onChange={value} placeholder='Name'/>
    </div>

  )
}
export default App