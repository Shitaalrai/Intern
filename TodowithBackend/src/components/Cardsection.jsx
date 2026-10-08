import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Button from "./Button";
import Form from "./Form";
import pic from "../assets/notebook.jpg";
import { AuthContext } from "./Context/Usecontext";
import { FaPlus } from "react-icons/fa";

function Cardsection({}) {
  const { user,setUser, tokenInit,setToken, userInit, token, AuthHeader, data, setdata } = useContext(AuthContext);
  const FetchApi = async () => {
    console.log(AuthHeader);
    try {
      const res = await axios.get(
        "http://localhost:5000/api/get-task",
        AuthHeader,
      );
      console.log(res);
      setdata(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    FetchApi();
  }, [token]);

  const addMessage = () => {
    if (token.length == 0 ){
      alert("Please login First.");
    } else {
      displayForm();
    }
  };

  function Loader() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="h-6 w-6 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

      <span className="text-gray-600">Loading...</span>
    </div>
  );
}

  const deleteTodo = async (id) => {
    const res = await axios.delete(
      `http://localhost:5000/api/delete-task/${id}`,
      AuthHeader,
    );
    setdata(res.data.data);
    console.log(res.data, "delete");
    console.log(id);
  };
  const editTodo = async (id) => {
    const res = await axios.put(`http://localhost:5000/api/delete-task/${id}`);
  };

  const [value, setvalue] = useState(false);
  const displayForm = () => {
    setvalue((prev) => !prev);
  };

  return (
    <div className="bg-white p-8 border-2 rounded-xl shadow-lg shadow-gray-700 flex flex-col gap-4 ">
      <div className="flex flex-col justify-center items-center gap-2">
        {data.length === 0 &&
        <div className="flex flex-col gap-4">
          <div >
            <img src={pic} className="h-80 w-80 rounded-2xl" />
          </div>
          <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold font-serif">No tasks <span className="text-blue-700">are added !!!</span> </h1>
          <h1 className="text-xl font-serif text-gray-800 ">Add your first task and stay organized.</h1>
          </div>
        </div>
        }
      </div>
      <div className="grid grid-cols-3 gap-2">
        {data.map((items, index) => (
          <Card
            key= {index}
            item={items}
            onDelete={() => deleteTodo(items.id)}
            onEdit={() => editTodo(items.id)}
          />
        ))}
      </div>
      {value && <Form close={displayForm} />}
      <div className="p-1 flex justify-center items-center">
            <button className="flex gap-2 items-center py-2 px-6 border bg-blue-700 text-lg cursor-pointer border-white rounded-4xl text-white  font-serif" onClick={addMessage}> <FaPlus size={20} />Add task</button>
      </div>
    </div>
  );
}

export default Cardsection;
