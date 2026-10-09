import React, { useContext, useState } from "react";
import { AuthContext } from "../src/components/Context/Usecontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LuClipboardList } from "react-icons/lu";
import pic from "../src/assets/forLogin.webp";

export const Loader = () => {
  return (
    <span className="h-5 w-5 rounded-full border-4 border-gray-400 border-t-red-400 animate-spin"></span>
  );
};

function LoginForm() {
  const navigate = useNavigate();
  const LoginInit = {
    email: "",
    password: "",
  };

  const [logindata, setLoginData] = useState(LoginInit);
  const [loading, setloading] = useState(false);
  const { setUser, setToken } = useContext(AuthContext);
  console.log(logindata);

  const handleLoginOnchange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const login = async () => {
    setloading(true);
    const res = await axios.post("http://localhost:5000/auth/login", {
      email: logindata.email,
      password: logindata.password,
    });
    if (res.data.message === "Login successfully.") {
      setUser(res.data.user);
      setToken(res.data.token);
      navigate("/");
    }
    setloading(false);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (logindata.email.length == 0) {
      alert("please enter email.");
      return;
    }
    login();
  };

  return (
    <div className="h-screen flex justify-center items-center bg-white gap-4 ">
      <div className="flex border-2 rounded-2xl gap-4 shadow-md shadow-gray-500">
        <div className=" p-4 flex flex-col gap-6 bg-blue-100 rounded-2xl">
          <div className="flex flex-col justify-center items-center p-2">
            <p>
              <LuClipboardList size={60} color="blue" />
            </p>
            <h1 className="text-2xl font-bold font-serif">Todo List</h1>
            <p className="text-md text-gray-700">Stay Organized,</p>
            <p className="text-md text-gray-700">get more done</p>
          </div>
          <div>
            <img src={pic} className="w-45 h-40 rotate-6 rounded-4xl" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col p-2 ">
            <h1 className="text-2xl font-extrabold font-serif">
              Welcome Back !!
            </h1>
            <p className="text-sm text-gray-700 font-serif">
              Log in to your account to continue your productive journey.
            </p>
          </div>
          <div>
            <form className=" p-4 " onSubmit={handleLogin}>
              <div className="mb-5">
                <label
                  for="email-alternative"
                  className="block mb-2.5 text-sm font-medium text-heading"
                >
                  Your email
                </label>
                <input
                  value={logindata.email}
                  type="email"
                  id="email-alternative"
                  className=" border-2 text-heading text-sm rounded-2xl focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
                  placeholder="name@flowbite.com"
                  onChange={handleLoginOnchange}
                  name="email"
                />
              </div>
              <div className="mb-5">
                <label
                  for="password-alternative"
                  className="block mb-2.5 text-sm font-medium text-heading "
                >
                  Your password
                </label>
                <input
                  value={logindata.password}
                  type="password"
                  id="password-alternative"
                  className=" border-2 text-sm rounded-2xl focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
                  placeholder="••••••••"
                  onChange={handleLoginOnchange}
                  name="password"
                />
              </div>
                <button
                  type="submit"
                  className=" bg-blue-600 border-2 p-2 font-bold shadow-md  rounded-2xl px-4 py-2 flex justify-center hover:bg-blue-300 cursor-pointer "
                >
                  {loading ? <Loader /> : "LOGIN"}
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    // <div className="h-screen flex flex-col justify-center items-center">
    //   <div>
    //     <h1 className="font-extrabold text-4xl p-4">Login Here</h1>
    //   </div>
    //   <form
    //     className=" p-4 border-2 w-sm h-70 rounded-lg shadow-md"
    //     onSubmit={handleLogin}
    //   >
    //     <div className="mb-5">
    //       <label
    //         for="email-alternative"
    //         className="block mb-2.5 text-sm font-medium text-heading"
    //       >
    //         Your email
    //       </label>
    //       <input
    //         value={logindata.email}
    //         type="email"
    //         id="email-alternative"
    //         className="bg-neutral-secondary-medium border-2 text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
    //         placeholder="name@flowbite.com"
    //         onChange={handleLoginOnchange}
    //         name="email"
    //       />
    //     </div>
    //     <div className="mb-5">
    //       <label
    //         for="password-alternative"
    //         className="block mb-2.5 text-sm font-medium text-heading "
    //       >
    //         Your password
    //       </label>
    //       <input
    //         value={logindata.password}
    //         type="password"
    //         id="password-alternative"
    //         className="bg-neutral-secondary-medium border-2 text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
    //         placeholder="••••••••"
    //         onChange={handleLoginOnchange}
    //         name="password"
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       className=" bg-blue-50 0 border-2 p-2 font-bold shadow-md  rounded-md px-4 py-2 flex justify-center hover:bg-green-500 cursor-pointer "
    //     >
    //       {
    //         loading ? <Loader /> : "LOGIN"
    //       }
    //     </button>
    //   </form>
    // </div>
  );
}

export default LoginForm;
