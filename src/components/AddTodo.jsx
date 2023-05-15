import React, { useState } from 'react'

const AddTodo = ({ handleAddTodo }) => {
  const [title, setTitle] = useState('')
  return (
    <>
      <section className="section-container">
        <div className='flex items-center justify-between'>
          <label>
            <input
              className="inputText"
              type="text"
              placeholder="Add todo..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
            <button
              className="btn btn-primary"
              onClick={() => handleAddTodo(title)}>
              Add Todo
            </button>
        </div>
      </section>
    </>
  )
}

export default AddTodo
