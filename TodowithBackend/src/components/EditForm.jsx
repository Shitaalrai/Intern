import React, { useContext, useState } from "react";
import { AuthContext } from "./Context/Usecontext";
import { ImCross } from "react-icons/im";
import Button from "./Button";
import axios from "axios";
import { MdEditNote } from "react-icons/md";
import { IoDocumentTextOutline, IoFlagOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { Loader } from "../../pages/LoginForm";

function EditForm({ closeForm, item }) {
  const init = {
    id: item.id || 0,
    title: item.title || "",
    description: item.description || "",
    priority: item.priority || "Low",
  };

  const [formdata, setformdata] = useState(init);
  const { AuthHeader, setdata } = useContext(AuthContext);
  const [loading,setloading] = useState(false);

  const handleChange = (e) => {
    setformdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    setloading(true);
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
           className="p-4 flex flex-col justify-center items-center gap-6 border-3 border-black shadow-md bg-white shadow-black rounded-2xl"
         >
           <div className="flex justify-center items-center">
             <div className="flex justify-center gap-6">
               <div>
                 <p>
                   <MdEditNote size={70} color="gray" />
                 </p>
               </div>
               <div className="flex flex-col justify-center">
                 <h2 className="font-bold text-3xl">Edit List</h2>
                 <p>Edit your Uploaded task and stay orgainized. </p>
               </div>
             </div>
             <div>
               <button
                 onClick={close}
                 className="cursor-pointer pl-20 pr-0 hover:text-red-600"
               >
                 <ImCross size={20} />
               </button>
             </div>
           </div>
           <div className="flex flex-col gap-2 ">
             <div className="flex flex-col gap-1 w-full h-full">
               <label htmlFor="Title" className="flex gap-1 items-center font-bold"><IoDocumentTextOutline />Title:</label>
               <textarea
                 onChange={handleChange}
                 value={formdata.title}
                 name="title"
                 type="text"
                 placeholder="Enter task title"
                 className="text-center p-1 border-2 w-85 rounded-2xl"
               />
             </div>
             <div className="flex flex-col gap-1 w-full h-full">
               <label htmlFor="Title" className="flex gap-1 items-center font-bold"><TiDocumentText />Description:</label>
               <textarea
                 onChange={handleChange}
               value={formdata.description}
               name="description"
               type="text"
               placeholder="Add more about the task..."
               className="text-center p-1 border-2 w-85 rounded-2xl"
               />
             </div>
             <div className="flex flex-col gap-1 w-full h-full">
               <label htmlFor="Title " className="flex gap-1 items-center font-bold"><IoFlagOutline />Priority:</label>
             <select
               onChange={handleChange}
               value={formdata.priority}
               name="priority"
               className="border-2 border-black outline-none rounded-2xl p-1 text-center h-12 w-85"
             >
               <option value="">Choose the Priority.</option>
               <option value="High">High</option>
               <option value="Medium">Medium</option>
               <option value="Low">Low</option>
             </select>
             </div>
             {/* <input type="select" placeholder='Priority' className='text-center p-1 border-2 rounded-md bg-orange-300'/> */}
           </div>
           <div className="flex gap-10 self-end">
             <button
               className="flex gap-1 items-center text-xl py-2 px-6 border bg-blue-700 border-white rounded-4xl text-white ease-in-out cursor-pointer font-serif hover:bg-blue-400 "
               type="submit"
             >
               {loading ? <Loader /> : "Submit"}
             </button>
             {/* <Button
               type="submit"
               text={
                 loading ? <Loader/> : "SUBMIT"
               }
               color={"green"}
               fontColor={"white"}
             /> */}
           </div>
         </form>
       </div>
  );
}

export default EditForm;
