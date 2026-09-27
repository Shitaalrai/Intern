import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import axios from "axios";

function Card({
  item,
  onDelete,
  onEdit,
}) {
console.log(item,"hi");

  return (
    <div className="border-2 rounded-md shadow-md shadow-cyan-800 py-5 px-5 flex flex-col gap-4 bg-gray-300">
        <div key={item._id} className="flex flex-col">
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p className="text-md">{item.description}</p>
            <span
              className={`text-lg self-start rounded-md p-1 font-bold priority-${item.priority}`}
            >
              {item.priority}
            </span>
          </div>

          <div className="flex gap-5 py-6 ">
            <button className="cursor-pointer" onClick={() => onEdit(item)}>
              <FiEdit size={20} />
            </button>
            <button className="cursor-pointer"
              onClick={() => onDelete(item._id)}
            >
              <MdOutlineDelete size={20} />
            </button>
          </div>
        </div>
    </div>
  );
}

export default Card;
