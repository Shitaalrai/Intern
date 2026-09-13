import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaCartShopping, FaRegStar, FaStar } from "react-icons/fa6";
import { RouterProvider, useParams } from "react-router-dom";
import Button from "../components/Button";

function SinglePage() {
  const [value, setValue] = useState({});
  const [loading, setloading] = useState(false);
  const { id } = useParams();
  console.log(id);

  const fetchData = async () => {
    setloading(true);
    await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res);
        setValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setloading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1 className="text-5xl text-center font-bold">LOADING....</h1>;
  }
  return (
    <div className="flex flex-col justify-center items-center p-6">
      <div className="border-4 shadow-md shadow-black rounded-lg w-[50%] m-2">
        <div className="bg-gray-500 flex  justify-center items-center">
          <img className="w-[25rem] h-[25rem] p-2" src={value.image} alt="Image" />
        </div>
        <div className="object-start p-2">
          <span className="text-xl font-bold p-2 bg-blue-800 rounded-lg shadow-sm shadow-gray-400">
            {value.category}
          </span>
        </div>
        <div className="p-2 flex flex-col justify-center items-center gap-2">
          <h1 className="font-extrabold text-3xl ">{value.title}</h1>
          <h3 className="text-xl text-justify px-4">{value.description}</h3>
        </div>
        <div className="flex justify-between items-center p-2">
          <div className="flex items-center gap-2 ">
            <h3 className=" font-bold text-2xl">$</h3>
            <h3 className=" font-bold text-2xl">{value.price}</h3>
          </div>
          <div className="flex p-2 items-center border-3 rounded-md border-black shadow-xl shadow-gray-800 hover:bg-green-700">
            <FaCartShopping />
            <Button buttonName={"Shop Now"} textColor={"black"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
