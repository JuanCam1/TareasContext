import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext({
  todo: {},
  todos: [],
  addTodo: (value) => {},
  editTodo: (id) => {},
  deleteTodo: (id) => {},
});

export default function TareaState({ children }) {
  const [todoC, setTodoC] = useState({});
  const [todos, setTodos] = useState([]);
  const addTodo = (value) => {
    if (todos.length) {
      const todoUpd = todos.find((item) => item.id === value.id);

      if (todoUpd !== undefined) {
        todoUpd.inputTitle = value.inputTitle;
        todoUpd.inputDescrip = value.inputDescrip;

        const todosUpd = todos.map((item) => {
          if (item.id === todoUpd.id) {
            item = todoUpd;
          }
          return item;
        });
        setTodos(todosUpd);
      } else {
        setTodos([...todos, value]);
      }
    } else {
      setTodos([value]);
    }
  };

  const editTodo = (id) => {
    const todoUpdate = todos.find((item) => item.id === id);
    setTodoC(todoUpdate);
  };

  const deleteTodo = (id) => {
    const todosDelete = todos.filter((item) => item.id !== id);
    setTodos(todosDelete);
  };

  return (
    <AppContext.Provider
      value={{
        todoC,
        todos,
        addTodo,
        editTodo,
        deleteTodo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
