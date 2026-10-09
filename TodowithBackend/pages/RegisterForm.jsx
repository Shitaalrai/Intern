import React, { useContext, useState } from "react";
import { AuthContext } from "../src/components/Context/Usecontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader } from "./LoginForm";
import pic from "../src/assets/forregister.webp";
import { LuClipboardList } from "react-icons/lu";

function RegisterForm() {
  const RegisterInit = {
    name: "",
    address: "",
    email: "",
    password: "",
    phone: "",
  };

  const [registerData, setRegisterData] = useState(RegisterInit);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const register = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/users/post-user", {
        name: registerData.name,
        address: registerData.address,
        phone: registerData.phone,
        email: registerData.email,
        password: registerData.password,
      });
      if (res.data.message == "User registred successfully") {
        setLoading(false);
        alert("user registered");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleRegisteronchange = (e) => {
    setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    register();
  };

  return (
    <div className="h-screen flex justify-center items-center bg-white gap-4 ">
      <div className="flex border-2 rounded-2xl gap-4 shadow-md shadow-gray-500">
        <div className=" p-4 flex flex-col gap-4 bg-blue-100 rounded-2xl">
          <div className="flex flex-col justify-center items-center p-2">
            <p>
              <LuClipboardList size={60} color="blue" />
            </p>
            <h1 className="text-2xl font-extrabold font-serif">Todo List</h1>
            <p className="text-md text-gray-700">Create your account</p>
            <p className="text-md text-gray-700">and start organizing today !</p>
          </div>
          <div>
            <img src={pic} className="w-45 h-40 rotate-6 rounded-4xl" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col p-2 ">
            <h1 className="text-2xl font-bold font-serif">Create Account</h1>
            <p className="text-sm text-gray-700 font-serif">
              Join Todolist and start managing your tasks easily. 
            </p>
          </div>
          <div>
            <form
              className="w-md p-4"
              onSubmit={handleRegisterSubmit}
            >
              <div className="flex flex-col gap-3 mb-5">
                <input
                  onChange={handleRegisteronchange}
                  type="text"
                  className=" border-2 cursor-pointer text-sm rounded-base w-full px-3 py-2.5 rounded-2xl placeholder:text-body"
                  placeholder="Name"
                  name="name"
                  required
                />
                <input
                  onChange={handleRegisteronchange}
                  type="Text"
                  className=" border-2 rounded-2xl cursor-pointer text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
                  placeholder="Address"
                  name="address"
                  required
                />
                <input
                  onChange={handleRegisteronchange}
                  type="Number"
                  className="rounded-2xl border-2 cursor-pointer text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
                <input
                  onChange={handleRegisteronchange}
                  type="email"
                  id="email-alternative"
                  className="rounded-2xl border-2 cursor-pointer text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  onChange={handleRegisteronchange}
                  type="password"
                  id="password-alternative"
                  className="rounded-2xl border-2 cursor-pointer text-sm block w-full px-3 py-2.5 shadow placeholder:text-body"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>
              <button
                type="submit"
                className=" bg-blue-600 border-2 p-2 font-bold shadow-md  rounded-2xl px-4 py-2 flex justify-center hover:bg-blue-300 cursor-pointer "
              >
                {loading ? <Loader /> : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <div className="h-screen flex flex-col justify-center items-center">
    //   <div>
    //     <h1 className="font-extrabold text-4xl p-4">Register Here</h1>
    //   </div>
    //   <form className="w-md p-4 border-2 rounded-xl shadow-md shadow-gray-700" onSubmit={handleRegisterSubmit}>
    //     <div className="flex flex-col gap-3 mb-5">
    //       <input
    //         onChange={handleRegisteronchange}
    //         type="text"
    //         class="bg-neutral-secondary-medium border-2 cursor-pointer text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
    //         placeholder="Name"
    //         name="name"
    //         required
    //       />
    //       <input
    //         onChange={handleRegisteronchange}
    //         type="Text"
    //         class="bg-neutral-secondary-medium border-2 cursor-pointer text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
    //         placeholder="Address"
    //         name="address"
    //         required
    //       />
    //       <input
    //         onChange={handleRegisteronchange}
    //         type="Number"
    //         class="bg-neutral-secondary-medium border-2 cursor-pointer text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
    //         placeholder="Phone Number"
    //         name="phone"
    //         required
    //       />
    //       <input
    //         onChange={handleRegisteronchange}
    //         type="email"
    //         id="email-alternative"
    //         class="bg-neutral-secondary-medium border-2 cursor-pointer border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
    //         placeholder="Email"
    //         name="email"
    //         required
    //       />
    //     </div>
    //     <div className="mb-5">
    //       <input
    //         onChange={handleRegisteronchange}
    //         type="password"
    //         id="password-alternative"
    //         className="bg-neutral-secondary-medium border-2 cursor-pointer text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
    //         placeholder="Password"
    //         name="password"
    //         required
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       className=" bg-blue-500 border-2 flex justify-center items-center font-bold shadow-md font-md rounded-md text-sm px-4 py-2.5 cursor-pointer hover:bg-green-500"
    //     >
    //       {loading ? <Loader/> : "Register"}
    //     </button>
    //   </form>
    // </div>
  );
}

export default RegisterForm;
