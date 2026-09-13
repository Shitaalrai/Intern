import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdOutlineDelete } from 'react-icons/md'

function Card(
    {
    title="",
    about="", 
    priority = "",
    onDelete,
    onEdit
    }) 
    {
  return (
    <div className='border-2 rounded-md shadow-md shadow-cyan-800 py-5 px-5 flex flex-col gap-4 bg-gray-300'>
            <div className='flex flex-col gap-2'>
                <h4 className='text-lg font-bold'>{title}</h4>
                <p className='text-md'> {about}</p>
                <span className={`text-lg self-start rounded-md p-1 font-bold priority-${priority}`}>{priority}</span>
            </div>
            <div className='flex gap-5'>
                <button className='cursor-pointer' onClick={onEdit}><FiEdit size={20} /></button>
                <button className='cursor-pointer' onClick={onDelete}><MdOutlineDelete size={20} /></button>
            </div>
        </div>
  )
}

export default Card