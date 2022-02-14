import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();
export const useTodoContext = () => useContext(TodoContext);

const TodoContextProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState([]);
  return (
    <TodoContext.Provider value={{ allTasks, setAllTasks }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
