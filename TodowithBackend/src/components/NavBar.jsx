import React, { useContext, useState } from "react";
import Button from "./Button";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { AuthContext } from "./Context/Usecontext";

function NavBar() {
  const { token,user } = useContext(AuthContext);
  return (
    <div className="bg-amber-100 p-8 border-2 rounded-xl shadow-lg shadow-gray-700 flex justify-around items-center gap-5">
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
        {token.length > 0 ?<div>
          <span className="text-lg font-bold border-2 rounded-[70%] h-32 w-32 p-6">
            {user.name}
          </span>
          </div> : (
          <>
            <Link to="/login">
              <Button text={"Login"} color={"green"} fontColor={"black"} />
            </Link>
            <Link to="/register">
              <Button text={"Register"} color={"orange"} fontColor={"black"} />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
