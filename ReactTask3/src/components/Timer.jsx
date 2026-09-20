import React, { useEffect, useState } from "react";

function Timer({color}) {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
    

  function timer() {}
  return (
    <div>
      <h1 style={{color:color}} className="text-3xl font-extrabold">
        {time}
        </h1>
    </div>
  );
}

export default Timer;
