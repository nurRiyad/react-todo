import { useState } from 'react';
import type { Task } from '../types';
import AddTask from './AddTask';
import Tasks from './Tasks';

export default function Body() {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const addNewTask = (taskName: string) => {
    const task: Task = {
      name: taskName,
      completed: false,
    };

    setTasks([...tasks, task]);
  };

  const updateTask = (taskname: string, isCompleted: boolean) => {
    const ts = tasks.map((el) => {
      if (el.name === taskname) {
        el.completed = isCompleted;
      }
      return el;
    });

    setTasks(ts);
  };

  const deleteTask = (taskName: string) => {
    const ts = tasks.filter((el) => el.name !== taskName);
    setTasks(ts);
  };

  return (
    <div className="flex-grow">
      <div className="max-w-xl mx-auto mt-2">
        <AddTask addNewTask={addNewTask} />

        <div>
          <Tasks tasks={tasks} taskOperations={{ updateTask, deleteTask }} />
        </div>
      </div>
    </div>
  );
}
