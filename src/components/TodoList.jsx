import React from 'react'
import Task from './Task'

const TodoList = ({ todos, handleChange, handleDelete }) => {
  return (
    <>
      <section className="section-container">
        <ul>
          {todos.map((todo) => {
            return (
              <li
                className="w-full bg-sky-600 my-2 px-3 py-2 rounded-md"
                key={todo.id}>
                <Task
                  todo={todo}
                  handleChange={handleChange}
                  handleDelete={handleDelete}
                />
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default TodoList
