import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import axios from "axios";
import EditForm from "./EditForm";

function Card({ item, onDelete, onEdit }) {
  const [displayEditForm, setEditForm] = useState(false);
  const toDisplayForm = () => {
    setEditForm(!displayEditForm);
  };

  return (
    <div className="border-2 rounded-lg shadow-md shadow-cyan-800 bg-blue-700">
      <div className="w-[98%] h-full bg-white p-5 flex flex-col gap-2 rounded-lg">
        <div className="flex justify-between items-start">
          <h4 className="text-xl font-bold">{item.title}</h4>
          <span
            className={`text-sm rounded-lg py-1 px-1.5  font-bold priority-${item.priority}`}
          >
            {item.priority}
          </span>
        </div>
        <div key={item._id} className="flex flex-col">
          <div className="flex flex-col gap-2">
            <p className="text-md text-gray-700 font-bold w-[80%]">
              {item.description}
            </p>
            {/* <span
            className={`text-lg self-start rounded-md p-1 font-bold priority-${item.priority}`}
          >
            {item.priority}
          </span> */}
          </div>

          <div className="flex gap-5 py-4">
            <button className="cursor-pointer" onClick={toDisplayForm}>
              <FiEdit size={20} />
            </button>

            <button
              className="cursor-pointer"
              onClick={() => onDelete(item._id)}
            >
              <MdOutlineDelete size={20} />
            </button>
          </div>
        </div>
        {displayEditForm && <EditForm closeForm={toDisplayForm} item={item} />}
      </div>
    </div>
  );
}

export default Card;
