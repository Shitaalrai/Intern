import React, { useContext } from "react";
import { AuthContext } from "./Context/Usecontext";
import { IoLogOutOutline } from "react-icons/io5";

function Information() {
  const { user,Logout } = useContext(AuthContext);
  
  return (
  
      <div className=" absolute gap-4 bottom-[17rem] left-[62rem] bg-gray-600 p-10 flex flex-col border-2 shadow-lg shadow-yellow-400 rounded-lg">
        <div>
          <h1 className="text-2xl font-bold text-white">Your Information</h1>
        </div>
        <div>
          <ul className="style-none">
            <li className="text-xl text-white">Name: {user.name}</li>
            <li className="text-xl text-white">Address: {user.address}</li>
            <li className="text-xl text-white">Email: {user.email}</li>
            <li className="text-xl text-white">Phone: {user.phone}</li>
          </ul>
        </div>
        <div className="">
          <button className="border-2 rounded-md bg-white w-30 text-xl flex justify-center items-center gap-2 cursor-pointer" onClick={Logout}><IoLogOutOutline size={30} /> Logout</button>
        </div>
    </div>
  );
}

export default Information;
