import { createContext } from 'react'

export const TodoContext = createContext()

const value = {}

export const ContextProvider = ({ children }) => {
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
