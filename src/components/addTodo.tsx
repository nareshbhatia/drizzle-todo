'use client';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

interface Props {
  createTodo: (value: string) => Promise<void>;
}

function AddTodo({ createTodo }: Props) {
  // State for handling input value
  const [input, setInput] = useState('');

  // Event handler for input change
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Event handler for adding a new todo
  const handleAdd = async () => {
    await createTodo(input);
    setInput('');
  };

  // Rendering the AddTodo component
  return (
    <div className="mt-2 flex w-full gap-1">
      {/* Input field for entering new todo text */}
      <input
        className="w-full rounded border border-gray-200 px-2 py-1 outline-none"
        onChange={handleInput}
        type="text"
        value={input}
      />
      {/* Button for adding a new todo */}
      <button
        className="flex h-9 w-14 items-center justify-center rounded bg-green-600 px-2 py-1 text-green-50"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
