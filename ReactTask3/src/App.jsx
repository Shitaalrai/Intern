import React, { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import Timer from "./components/Timer";

function App() {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount(count + 1);
  };
  useEffect(() => {
    console.log(count);
  }, [count]);

  const decrement = () => {
    setcount(count - 1);
  };

  const [inputData, setInputData] = useState();

  const changetext = (e) => {
    setInputData(e.target.value);
  };

  function clearText() {
    setInputData("");
  }

  const [color,setColor] = useState("black");

  const colorOfTimer = (e) =>{
    setColor(e.target.value);    
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
      <div className="flex gap-6">
        <Buttons onClick={increment} text={"+"} />
        <h1>{count}</h1>
        <Buttons onClick={decrement} text={"-"} />
      </div>
      <hr />
      <div className="flex flex-col gap-4 border-6 p-6 items-center justify-center">
        <h1 className="text-4xl font-bold">Enter anything</h1>
        <textarea
          value={inputData}
          type="text"
          onChange={changetext}
          placeholder="Name"
          className="border-2  w-60"
        />
        <h2 className="text-xl text-red-600">{inputData}</h2>
        <button className="border-4 rounded-md w-20" onClick={clearText}>
          Clear
        </button>
      </div>
        <div>
          <select onChange={colorOfTimer}> 
            <option value={"black"}>Black</option>
            <option value={"red"}>Red</option>
            <option value={"Blue"}>Blue</option>
            <option value={"green"}>Green</option>
          </select>
        </div>
        <div>
          <Timer color={color}/>
        </div>
    </div>
  );
}
export default App;
