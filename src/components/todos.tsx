'use client';
import AddTodo from './addTodo';
import Todo from './todo';
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
} from '@/actions/todoAction';
import type { todoType } from '@/types/todoType';
import { useState } from 'react';

interface Props {
  todos: todoType[];
}

function Todos({ todos }: Props) {
  // State to manage the list of todo items
  const [todoItems, setTodoItems] = useState<todoType[]>(todos);

  // Function to create a new todo item
  const createTodo = async (text: string) => {
    const id =
      todoItems.length > 0 ? todoItems[todoItems.length - 1].id + 1 : 1;
    await addTodo(id, text);
    setTodoItems((prev) => [...prev, { id, text, done: false }]);
  };

  // Function to change the text of a todo item
  const changeTodoText = async (id: number, text: string) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
    );
    await editTodo(id, text);
  };

  // Function to toggle the "done" status of a todo item
  const toggleIsTodoDone = async (id: number) => {
    setTodoItems((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
    await toggleTodo(id);
  };

  // Function to delete a todo item
  const deleteTodoItem = async (id: number) => {
    setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    await deleteTodo(id);
  };

  // Rendering the Todo List component
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center p-16">
      <div className="text-5xl font-medium">To-do app</div>
      <div className="mt-8 flex w-full flex-col gap-2">
        {/* Mapping through todoItems and rendering Todo component for each */}
        {todoItems.map((todo) => (
          <Todo
            changeTodoText={changeTodoText}
            deleteTodoItem={deleteTodoItem}
            key={todo.id}
            todo={todo}
            toggleIsTodoDone={toggleIsTodoDone}
          />
        ))}
      </div>
      {/* Adding Todo component for creating new todos */}
      <AddTodo createTodo={createTodo} />
    </main>
  );
}

export default Todos;
