import React, { useState } from "react";

const App = () => {
    const [on,setIsOn] = useState(true);
    const changeBg = ()=>{
      if (on){
        setIsOn(false)
      }
      else {
        setIsOn(true)
      }
      // setIsOn(!on)
    }
  return (
    <div className="flex justify-center items-center h-screen " style={{backgroundColor:on===true?"black":"orange"}}>
      <button onClick={changeBg}  className="border-4 cursor-pointer border-amber-50 p-2 text-center font-bold rounded-md" style={{backgroundColor:on===true? "yellow":"green"}} >    
           {on===true?"ON":"OFF"}
      </button>
    </div>
  );
};

export default App;
