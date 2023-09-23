import { useState } from 'react';

interface Props {
  addNewTask: (task: string) => void;
}

export default function AddTask({ addNewTask }: Props) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (newTask) {
      addNewTask(newTask);
      setNewTask('');
    }
  };
  return (
    <div className="">
      <form className="space-x-2 flex">
        <input
          placeholder="Type to Enter New Task"
          type="text"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          className="rounded-md w-full"
        />
        <button onClick={(e) => handleSubmit(e)} className="bg-indigo-700 text-white w-32 p-2 rounded-md">
          Add Task
        </button>
      </form>
    </div>
  );
}
