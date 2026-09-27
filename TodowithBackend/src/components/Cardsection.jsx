import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function Cardsection({}) {
  const [data, setdata] = useState([]);

  const FetchApi = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/get-task");
      console.log(res.data.data, "hello");
      setdata(res.data.data);
    } catch (e) {
      console.log("e");
    }
  };

  useEffect(() => {
    FetchApi();
  }, []);



  const deleteTodo = async (id) => {
    const res = await axios.delete(
      `http://localhost:5000/api/delete-task/${id}`,
    );
    console.log(res.data, "delete");

    console.log(id);
  };
  const editTodo = async (id) => {
    const res = await axios.put(
      `http://localhost:5000/api/delete-task/${id}`
    )
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {data.map((items, index) => (
        <Card
          item={items}
          onDelete={() => deleteTodo(items.id)}
          onEdit={() => editTodo(items.id)}
        />
      ))}
      {/* <Card title={"Study"} about={"Study at least 2 hours."} priority={'Low'}/>
       <Card title={"Drink Water"} about={"Drink water 3 litre a day"}   priority={'Medium'} />
       <Card title={"Complete assignment"} about={"Finish the pending college assignment."}  priority={'Low'} />
       <Card title={"Study JavaScript"} about={'Study and practice Javascript.'}  priority={'Medium'} />
       <Card title={"Clean the Room"} about={"Clean and Organize your room."}  priority={'High'} />
       <Card title={"Study"} about={"Study at least 2 hours."}  priority={'Medium'} />
       <Card title={"Drink Water"} about={"Drink water 3 litre a day"}  priority={'High'} />
       <Card title={"Complete assignment"} about={"Finish the pending college assignment."}  priority={'Medium'} />
       <Card title={"Study JavaScript"} about={'Study and practice Javascript.'}  priority={'High'} /> */}
    </div>
  );
}

export default Cardsection;
