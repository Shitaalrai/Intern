import React from 'react'
import Card from './Card'

function Cardsection({todos,deleteTodo, editTodo}) {
  return (
    <div className='grid grid-cols-3 gap-2'>
        {todos.map((todo, index) => (
        <Card
          key={index}
          title={todo.title}
          about={todo.description}
          priority={todo.priority}
          onDelete={() => deleteTodo(index)}
          onEdit={() => editTodo(index, todo)}
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
  )
}

export default Cardsection