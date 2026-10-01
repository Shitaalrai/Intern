import React, { useContext, useState } from "react";
import Button from "./Button";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { AuthContext } from "./Context/Usecontext";
import Information from "./Information";
import { CgProfile } from "react-icons/cg";

function NavBar() {
  const { token, user } = useContext(AuthContext);
  const [infoDisplay, setinfodisplay] = useState(false);
  const [logOut, setLogout] = useState();

  return (
    <>
      <div className="bg-amber-100 p-8 border-2 rounded-xl shadow-lg shadow-gray-700 flex justify-evenly items-center gap-8">
        <div>
          <h3 className="text-4xl font-serif font-bold">TODO <span className="text-red-600">LIST</span> </h3>
        </div>
        <div className="flex gap-4">
          <div className="flex justify-between items-center border-2 rounded-md px-1 h-15 ">
            <GoSearch size={25} />
            <input
              type="text"
              placeholder="Search Task"
              className="text-black h-full p-1 px-3 text-lg w-md rounded-md outline-none "
            />
          </div>
          </div>
          {token.length > 0 ? (
            <div className="flex flex-col gap-2 justify-center items-center">
              <button
              className="cursor-pointer"
                onClick={() => {
                  setinfodisplay((prev) => !prev);
                }}
              >
               <CgProfile size={40}/>
              </button>
              <h1 className="text-xl font-bold">{user.name}</h1>
              {infoDisplay && <Information />}
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Link to="/login">
                <Button text={"Login"} color={"green"} fontColor={"black"} />
              </Link>
              <Link to="/register">
                <Button
                  text={"Register"}
                  color={"orange"}
                  fontColor={"black"}
                />
              </Link>
            </div>
          )}
        
      </div>
    </>
  );
}

export default NavBar;
