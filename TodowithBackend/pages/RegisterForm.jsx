import React, { useContext, useState } from "react";
import { AuthContext } from "../src/components/Context/Usecontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterForm() {

  const RegisterInit = {
    name: "",
    address: "",
    email: "",
    password: "",
    phone: "",
  };

  const [registerData, setRegisterData] = useState(RegisterInit);
  const navigate = useNavigate();

  const register = async () => {
    try{
      const res = await axios.post("http://localhost:5000/users/post-user", {
        name: registerData.name,
        address: registerData.address,
        phone: registerData.phone,
        email: registerData.email,
        password: registerData.password,
      });
      if (res.data.message == "User registred successfully"){
        alert("user registered");
        navigate("/");
      }
    }catch(e){
      console.log(e);
    }
  };

  const handleRegisteronchange = (e) => {
    setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    register();
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="font-extrabold text-4xl p-4">Register Here</h1>
      </div>
      <form className="w-md p-4 border-2 rounded-xl shadow-md shadow-gray-700" onSubmit={handleRegisterSubmit}>
        <div className="flex flex-col gap-3 mb-5">
          <input
            onChange={handleRegisteronchange}
            type="text"
            class="bg-neutral-secondary-medium border-2 cursor-pointer text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
            placeholder="Name"
            name="name"
            required
          />
          <input
            onChange={handleRegisteronchange}
            type="Text"
            class="bg-neutral-secondary-medium border-2 cursor-pointer text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
            placeholder="Address"
            name="address"
            required
          />
          <input
            onChange={handleRegisteronchange}
            type="Number"
            class="bg-neutral-secondary-medium border-2 cursor-pointer text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
            placeholder="Phone Number"
            name="phone"
            required
          />
          <input
            onChange={handleRegisteronchange}
            type="email"
            id="email-alternative"
            class="bg-neutral-secondary-medium border-2 cursor-pointer border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
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
            className="bg-neutral-secondary-medium border-2 cursor-pointer text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
            placeholder="Password"
            name="password"
            required
          />
        </div>
        <button
          type="submit"
          className=" bg-blue-500 border-2 font-bold shadow-md font-md rounded-md text-sm px-4 py-2.5 cursor-pointer hover:bg-green-500"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
