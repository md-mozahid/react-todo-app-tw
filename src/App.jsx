import { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const todoList = [
  { id: 0, title: 'todo title1', stock: true },
  { id: 1, title: 'todo title2', stock: false },
  { id: 2, title: 'todo title3', stock: true },
]
let nextId = 3

// get items from local storage
const getLocalStorage = () => {
  let items = localStorage.getItem('todoList')

  if (items) {
    return JSON.parse(localStorage.getItem('todoList'))
  } else {
    return []
  }
}

function App() {
  const [todos, setTodos] = useState(getLocalStorage())

  // add todo
  const handleAddTodo = (newTodo) => {
    const addNewTodo = [
      ...todos,
      {
        id: nextId++,
        title: newTodo,
        stock: false,
      },
    ]
    setTodos(addNewTodo)
  }
  // update todo
  const handleChange = (updateTitle) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === updateTitle.id) {
        return updateTitle
      } else {
        return todo
      }
    })
    setTodos(updatedTodo)
  }
  // delete todo
  const handleDelete = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodo)
  }

  // save local storage
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <div className="section-container">
        <h1 className="text-2xl">My Todo App</h1>
        <AddTodo handleAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      </div>
    </>
  )
}

export default App
