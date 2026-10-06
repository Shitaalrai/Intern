import React, { useContext, useState } from "react";
import { AuthContext } from "./Context/Usecontext";
import { ImCross } from "react-icons/im";
import Button from "./Button";
import axios from "axios";

function EditForm({ closeForm, item }) {
  const init = {
    id: item.id || 0,
    title: item.title || "",
    description: item.description || "",
    priority: item.priority || "Low",
  };

  const [formdata, setformdata] = useState(init);
  const { AuthHeader, setdata } = useContext(AuthContext);

  const handleChange = (e) => {
    setformdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `http://localhost:5000/api/update-task/${formdata.id}`,
      formdata,
      AuthHeader,
    );
    setdata(res.data.data);
    closeForm();
  };

  return (
    <div className="h-screen fixed inset-0 backdrop-blur-sm flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="px-10 flex flex-col justify-center items-center gap-2 border-3 border-black py-4 shadow-md bg-blue-400 shadow-black rounded-2xl"
      >
        <div className="flex justify-center items-center ">
          <div>
            <h2 className="font-bold text-3xl pl-12 ">Edit List</h2>
          </div>
          <div>
            <button
              onClick={closeForm}
              type="button"
              className="cursor-pointer pl-20 pr-0 "
            >
              <ImCross size={20} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-1.5 ">
          <textarea
            onChange={handleChange}
            value={formdata.title}
            name="title"
            type="text"
            placeholder="Title"
            className="text-center p-1 border-2 w-64 rounded-md bg-orange-300"
          />

          <textarea
            onChange={handleChange}
            value={formdata.description}
            name="description"
            type="text"
            placeholder="Description"
            className="text-center p-1 border-2 rounded-md w-64 bg-orange-300"
          />
          <select
            onChange={handleChange}
            value={formdata.priority}
            name="priority"
            className="border-2 border-black outline-none rounded-md p-1  bg-orange-300 text-center h-12"
          >
            <option value="">Choose the Priority.</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          {/* <input type="select" placeholder='Priority' className='text-center p-1 border-2 rounded-md bg-orange-300'/> */}
        </div>
        <div className="flex gap-10 self-end">
          <Button
            type="submit"
            text={"Submit"}
            color={"green"}
            fontColor={"white"}
          />
          {/* <Button
            text={"Cancel"}
            color={"Red"}
            onClick={close}
            fontColor={"white"}
          /> */}
        </div>
      </form>
    </div>
  );
}

export default EditForm;
