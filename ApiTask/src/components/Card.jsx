import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { FaCartShopping, FaRegStar, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card() {
  const [data, setdata] = useState([]);

  const FetchApi = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setdata(res.data);
    } catch (e) {
      console.log("e");
    }
  };
  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <>
      {data.map((item, index) => {
        return (
          <Link key={item.id} to={`/singlepage/${item.id}`}>
            <div className="border-2 rounded-xl bg-blue-950 shadow-amber-200 shadow-sm h-[40rem] w-[22rem]">
              <div className="flex flex-col items-cente px-1 w-full h-[50%]">
                <img
                  className=" w-full h-full rounded-xl p-2 bg-blue-800 object-contain"
                  src={item.image}
                />
              </div>
              <div className="flex justify-center items-center flex-col">
                <h2 className="font-bold text-xl p-1 text-center text-white">
                  {item.title}
                </h2>
                <p className="text-white text-md text-start p-1">
                  {item.description.slice(0, 60)}...
                </p>
              </div>
              <div className="object-start p-2">
                <span className="text-sm p-2 bg-blue-800 rounded-lg shadow-sm shadow-gray-400 text-white">
                  {item.category}
                </span>
              </div>
              <div className="p-2 flex gap-6 items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => {
                    if (item.rating.rate >= star) {
                      return <FaStar key={star} color="yellow" size={20} />;
                    }

                    if (item.rating.rate >= star - 0.5) {
                      return (
                        <FaStarHalfAlt key={star} color="yellow" size={20} />
                      );
                    }
                    return <FaRegStar key={star} color="yellow" size={20} />;
                  })}
                </div>
                <div className="flex gap-1">
                  <h3 className="text-white text-lg">{item.rating.rate}</h3>
                  <h3 className="text-white text-lg">({item.rating.count})</h3>
                </div>
              </div>
              <div className="flex justify-between items-center p-2">
                <div className="flex items-center gap-2 ">
                  <h3 className="text-white font-bold text-lg">$</h3>
                  <h3 className="text-white font-bold text-lg">{item.price}</h3>
                </div>
                <div className="flex p-1 items-center border-3 rounded-md border-amber-500 hover:bg-green-700">
                  <FaCartShopping color="white" />
                  <Button buttonName={"Shop Now"} textColor={"white"} />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default Card;
