import React, { useContext, useState } from "react";
import Button from "./Button";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { AuthContext } from "./Context/Usecontext";
import Information from "./Information";
import { CgProfile } from "react-icons/cg";
import { MdEventNote } from "react-icons/md";
import { FaRegUser, FaUserPlus } from "react-icons/fa";

function NavBar() {
  const { token, user } = useContext(AuthContext);
  const [infoDisplay, setinfodisplay] = useState(false);
  const [logOut, setLogout] = useState();

  return (
    <>
      <div className="bg-blue-900 p-8 border-2 rounded-xl shadow-lg shadow-gray-700 flex justify-evenly items-center gap-15">
        <div className="flex items-center justify-center gap-4">
          <span>
            <MdEventNote size={50} color="white" />
          </span>
          <h3 className="text-3xl text-white font-serif font-bold cursor-pointer">
            TODO <span className="text-blue-400">LIST</span>{" "}
          </h3>
        </div>
        {/* <div className="flex gap-4"> */}
        <div className="flex justify-between items-center border-2 border-white shadow-sm shadow-gray-600 rounded-2xl px-2 h-12 bg-white ">
          <GoSearch size={22} />
          <input
            type="text"
            placeholder="Search Task"
            className="text-gray-700 h-full p-1 px-3 text-md w-md rounded-md outline-none "
          />
          {/* </div> */}
        </div>
        {token.length > 0 ? (
          <div className="flex relative flex-col gap-2 justify-center items-center">
            <button
              className="cursor-pointer"
              onClick={() => {
                setinfodisplay((prev) => !prev);
              }}
            >
              <CgProfile size={40} color="white" />
            </button>
            {infoDisplay && <Information />}

            <h1 className="text-xl font-bold text-blue-300">{user.name}</h1>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <Link to="/login">
              <button className="flex gap-1 items-center py-2 px-6 border border-white rounded-4xl text-white ease-in-out cursor-pointer font-serif hover:bg-blue-400 ">
                {" "}
                <FaRegUser />
                Login
              </button>
              {/* <Button text={"Login"} color={"green"} fontColor={"black"} /> */}
            </Link>
            <Link to="/register">
              <button className="flex gap-1 items-center py-2 px-6 border border-white rounded-4xl text-white  font-serif cursor-pointer hover:bg-blue-400 ">
                {" "}
                <FaUserPlus />
                Register
              </button>
              {/* <Button
                  text={"Register"}
                  color={"orange"}
                  fontColor={"black"}
                /> */}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
