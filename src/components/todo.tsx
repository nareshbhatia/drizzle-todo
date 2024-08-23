'use client';
import type { todoType } from '@/types/todoType';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

interface Props {
  todo: todoType;
  changeTodoText: (id: number, text: string) => Promise<void>;
  toggleIsTodoDone: (id: number, done: boolean) => Promise<void>;
  deleteTodoItem: (id: number) => Promise<void>;
}

function Todo({
  todo,
  changeTodoText,
  toggleIsTodoDone,
  deleteTodoItem,
}: Props) {
  // State for handling editing mode
  const [editing, setEditing] = useState(false);

  // State for handling text input
  const [text, setText] = useState(todo.text);

  // State for handling "done" status
  const [isDone, setIsDone] = useState(todo.done);

  // Event handler for text input change
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // Event handler for toggling "done" status
  const handleIsDone = async () => {
    await toggleIsTodoDone(todo.id, !isDone);
    setIsDone((prev) => !prev);
  };

  // Event handler for initiating the edit mode
  const handleEdit = () => {
    setEditing(true);
  };

  // Event handler for saving the edited text
  const handleSave = async () => {
    await changeTodoText(todo.id, text);
    setEditing(false);
  };

  // Event handler for canceling the edit mode
  const handleCancel = () => {
    setEditing(false);
    setText(todo.text);
  };

  // Event handler for deleting a todo item
  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this todo?')) {
      await deleteTodoItem(todo.id);
    }
  };

  // Rendering the Todo component
  return (
    <div className="flex items-center gap-2 rounded-lg border border-solid border-gray-200 p-4">
      {/* Checkbox for marking the todo as done */}
      <input
        checked={isDone}
        className="size-4 rounded-sm text-blue-200"
        onChange={handleIsDone}
        type="checkbox"
      />
      {/* Input field for todo text */}
      <input
        className={`${
          todo.done ? 'line-through' : ''
        } w-full rounded border-gray-200 px-2 py-1 outline-none read-only:border-transparent focus:border`}
        onChange={handleTextChange}
        readOnly={!editing}
        type="text"
        value={text}
      />
      {/* Action buttons for editing, saving, canceling, and deleting */}
      <div className="ml-auto flex gap-1">
        {editing ? (
          <button
            className="w-14 rounded bg-green-600 px-2 py-1 text-green-50"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            className="w-14 rounded bg-blue-400 px-2 py-1 text-blue-50"
            onClick={handleEdit}
          >
            Edit
          </button>
        )}
        {editing ? (
          <button
            className="w-16 rounded bg-red-400 px-2 py-1 text-red-50"
            onClick={handleCancel}
          >
            Close
          </button>
        ) : (
          <button
            className="w-16 rounded bg-red-400 px-2 py-1 text-red-50"
            onClick={handleDelete}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default Todo;
