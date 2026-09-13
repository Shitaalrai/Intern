import React, { useState } from "react";
import Button from "./Button";
import { GoSearch } from "react-icons/go";
import Form from "./Form";

function NavBar({addTodo}) {
  const [value, setvalue] = useState(false);
  const displayForm = () => {
    setvalue((prev) => !prev);
  };

  return (
    <div className=" h-20 flex justify-around items-center gap-5">
      <div>
        <h3 className="text-4xl font-serif">TODO LIST</h3>
      </div>
      <div className="flex gap-4">
        <div className="flex justify-between items-center border-2 rounded-md px-1 ">
          <GoSearch size={25} />
          <input
            type="text"
            placeholder="Search Task"
            className="text-black p-1 px-3 text-lg w-md rounded-md outline-none "
          />
        </div>
        <Button text={"ADD"} onClick={displayForm} color={"orange"} fontColor={"Black"} />
      </div>
      {value && 
      <Form 
      close={displayForm} 
      addTodo={addTodo}
      />}
    </div>
  );
}

export default NavBar;
