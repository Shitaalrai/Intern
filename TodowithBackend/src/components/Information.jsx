import React, { useContext } from "react";
import { AuthContext } from "./Context/Usecontext";
import { IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSafety } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Information() {
  const { user, Logout } = useContext(AuthContext);

  return (
    <div className=" absolute gap-4 bottom-[7rem] left-[68rem] flex flex-col border-2 border-white shadow-md shadow-gray-700 rounded-xl bg-black/20 backdrop-blur-sm ">
      <div className="bg-blue-700 w-full h-30 rounded-xl flex gap-3 justify-center items-center p-6">
        <div>
          <CgProfile size={80} color="white" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-serif font-bold text-white flex justify-center items-center">
            {" "}
            Your Information
          </h1>
          <p className="flex gap-2 text-sm font-serif text-white">
            Keep your Information safe <AiOutlineSafety size={20} />
          </p>
        </div>
      </div>
      <div className="flex flex-col px-4 gap-1.5">
      <div className="flex gap-4 items-center px-6 ">
        <div>
          <p className="bg-blue-200 rounded-xl">
            <CiUser size={30} color="blue" />
          </p>
        </div>
        <div>
          <p className="font-serif text-gray-800 text-sm font-bold">Name:</p>
          <p className="font-serif text-md font-bold">{user.name}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center px-6 ">
        <div>
          <p className="bg-blue-200 rounded-xl">
            <FaLocationDot  size={30} color="blue" />
          </p>
        </div>
        <div>
          <p className="font-serif text-gray-800 text-sm font-bold">Address:</p>
          <p className="font-serif text-md font-bold">{user.address}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center px-6 ">
        <div>
          <p className="bg-blue-200 rounded-xl">
            <MdEmail  size={30} color="blue" />
          </p>
        </div>
        <div>
          <p className="font-serif text-gray-800 text-sm font-bold">Email:</p>
          <p className="font-serif text-md font-bold">{user.email}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center px-6 ">
        <div>
          <p className="bg-blue-200 rounded-xl">
            <FaPhoneAlt   size={30} color="blue" />
          </p>
        </div>
        <div>
          <p className="font-serif text-gray-800 text-sm font-bold">Phone:</p>
          <p className="font-serif text-md font-bold">{user.phone}</p>
        </div>
      </div>
      </div>
      {/* <div>
          <ul className="style-none">
            <li className="text-xl text-white">Name: {user.name}</li>
            <li className="text-xl text-white">Address: {user.address}</li>
            <li className="text-xl text-white">Email: {user.email}</li>
            <li className="text-xl text-white">Phone: {user.phone}</li>
          </ul>
        </div> */}

      <div className=" flex justify-center items-center p-4">
        <button
          className="border-2 rounded-xl py-1 px-2 bg-blue-600 text-white w-30 text-xl flex justify-center items-center gap-2 cursor-pointer hover:bg-pink-700"
          onClick={Logout}
        >
          <IoLogOutOutline size={25} /> Logout
        </button>
      </div>
    </div>
  );
}

export default Information;
