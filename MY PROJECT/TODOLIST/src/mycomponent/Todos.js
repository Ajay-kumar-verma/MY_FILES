import React from 'react'
import {TodoItem}  from "../mycomponent/TodoItem";
export const Todos = (todos) => {
    
    return (
        <div className="container" >
            {/* Thi sis for heading  */}

            <h3 className=" my-2 " > Todo lists </h3>
      {/*  It is for when no length of todos is zero  */}
           {todos.todo.length===0?"No item to show ":"" }
    
            {todos.todo.map((x)=>{
             return   <TodoItem  todo={x}   onDelete={todos.onDelete} />
              
           })}

  



        </div>
    )
}
