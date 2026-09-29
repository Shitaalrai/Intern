import React, { useContext, useState } from "react";
import { AuthContext } from "../src/components/Context/Usecontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const navigate = useNavigate();
  const LoginInit = {
    email: "",
    password: "",
  };

  const [logindata, setLoginData] = useState(LoginInit);

  const {setUser,setToken } = useContext(AuthContext);
  console.log(logindata);

  const handleLoginOnchange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const login = async () => {
    const res = await axios.post("http://localhost:5000/auth/login", {
      email: logindata.email,
      password: logindata.password,
    });
    if (res.data.message === "Login successfully.") {
      setUser(res.data.user)
      setToken(res.data.token)
      navigate("/");
    }
   
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (logindata.email.length == 0) {
      alert("please enter email.");
    }
    login();
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="font-extrabold text-4xl p-4">Login Here</h1>
      </div>
      <form
        className=" p-4 border-2 w-sm h-70 rounded-lg shadow-md"
        onSubmit={handleLogin}
      >
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
            className="bg-neutral-secondary-medium border-2 text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
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
            className="bg-neutral-secondary-medium border-2 text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
            placeholder="••••••••"
            onChange={handleLoginOnchange}
            name="password"
          />
        </div>
        <button
          type="submit"
          className=" bg-blue-500 border-2 font-bold shadow-md font-md rounded-md text-sm px-4 py-2.5 hover:bg-green-500 cursor-pointer "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
