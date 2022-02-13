import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();
export const useTodoContext = () => useContext(TodoContext);

const TodoContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  return (
    <TodoContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
