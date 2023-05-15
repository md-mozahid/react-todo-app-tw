import React, { useState } from 'react'

const Task = ({ todo, handleChange, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false)

  let todoContent

  if (isEditing) {
    todoContent = (
      <>
        <label>
          <input
            type="text"
            value={todo.title}
            onChange={(e) => {
              handleChange({
                ...todo,
                title: e.target.value,
              })
            }}
          />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </label>
      </>
    )
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    )
  }

  return (
    <>
      <section className="">
        <label className='flex justify-between'>
          <input
            type="checkbox"
            checked={todo.stock}
            onChange={(e) => {
              handleChange({
                ...todo,
                stock: e.target.checked,
              })
            }}
          />
          {todoContent}
          <button className='btn' onClick={() => handleDelete(todo.id)}>Delete</button>
        </label>
      </section>
    </>
  )
}

export default Task
