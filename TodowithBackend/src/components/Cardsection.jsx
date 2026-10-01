import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Button from "./Button";
import Form from "./Form";
import pic from "../assets/notebook.jpg";
import { AuthContext } from "./Context/Usecontext";

function Cardsection({}) {
  const {user,userInit} = useContext(AuthContext);
  const [data, setdata] = useState([]);

  const FetchApi = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/get-task");
      setdata(res.data.data);
    } catch (e) {
      console.log("e");
    }
  };

  useEffect(() => {
    FetchApi();
  }, []);

  const addMessage = () => {
    if (user == userInit) {
      alert("Please login First.");
    }else {
      displayForm();
    }
  }

  const deleteTodo = async (id) => {
    const res = await axios.delete(
      `http://localhost:5000/api/delete-task/${id}`,
    );
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
    <div className="bg-amber-100 p-8 border-2 rounded-xl shadow-lg shadow-gray-700 ">
      <div className="flex flex-col justify-center items-center gap-2">
        <div>
          <img src={pic} className="h-80 w-80" />
        </div>
        <h1 className="text-xl ">No tasks are added !!!</h1>
        <h1 className="text-xl ">Add your first task and stay organized.</h1>
        <Button
          text={"ADD"}
          // onClick={displayForm}
          onClick ={addMessage}
          color={"orange"}
          fontColor={"Black"}
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {data.map((items, index) => (
          <Card
            item={items}
            onDelete={() => deleteTodo(items.id)}
            onEdit={() => editTodo(items.id)}
          />
        ))}
      </div>
      {value && <Form close={displayForm} />}
    </div>
  );
}

export default Cardsection;
