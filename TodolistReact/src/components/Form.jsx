import React, { useState } from "react";
import Button from "./Button";

function Form({ close }) {

    const init =   
    {
      title: "",
      description: "",
      priority: "",
    };

  const [formdata, setformdata] = useState(init);

  const handleChange = (e) => {
    setformdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(e.target.name + ":" + e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformdata(init);
    console.log(formdata);
  };
  

  return (
    <div className="h-screen fixed inset-0 backdrop-blur-sm flex flex-col justify-center items-center">
      <form 
      onSubmit={handleSubmit}
      className="px-10 flex flex-col justify-center items-center gap-2 border-3 border-black py-4 shadow-md bg-blue-400 shadow-black rounded-2xl">
        <div>
          <h2 className="font-bold text-xl ">Add List</h2>
        </div>
        <div className="flex flex-col gap-2 p-1.5 ">
          <textarea
            onChange={handleChange}
            value={formdata.title}
            name="title"
            type="text"
            placeholder="Title"
            className="text-center p-1 border-2 rounded-md bg-orange-300"
          />
          <textarea
            onChange={handleChange}
            value={formdata.description}
            name="description"
            type="text"
            placeholder="Description"
            className="text-center p-1 border-2 rounded-md bg-orange-300"
          />
          <select
            onChange={handleChange}
            value={formdata.priority}
            name="priority"
            className="border-2 border-black outline-none rounded-md p-1 text-center"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          {/* <input type="select" placeholder='Priority' className='text-center p-1 border-2 rounded-md bg-orange-300'/> */}
        </div>
        <div className="flex gap-10">
          <Button
           type="submit" 
           text={"Submit"} 
           color={"orange"}
            fontColor={"white"} 
            />
          <Button
            text={"Cancel"}
            color={"Red"}
            onClick={close}
            fontColor={"white"}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
