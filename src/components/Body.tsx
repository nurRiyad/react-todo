import { useState } from 'react';
import type { Task } from '../types';
import AddTask from './AddTask';
import Tasks from './Tasks';

export default function Body({ status }: { status: 'all' | 'not' | 'com' }) {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const addNewTask = (taskName: string) => {
    const task: Task = {
      name: taskName,
      completed: false,
      id: String(Date.now()),
    };
    setTasks([...tasks, task]);
  };

  const updateTask = (id: string, isCompleted: boolean) => {
    const ts = tasks.map((el) => {
      if (el.id === id) {
        el.completed = isCompleted;
      }
      return el;
    });

    setTasks(ts);
  };

  const filTeresTask = () => {
    return tasks.filter((tsk) => {
      if (status === 'com') return tsk.completed === true;
      else if (status === 'not') return tsk.completed === false;
      else return true;
    });
  };

  const deleteTask = (id: string) => {
    const ts = tasks.filter((el) => el.id !== id);
    setTasks(ts);
  };

  return (
    <div className="flex-grow">
      <div className="max-w-xl mx-auto mt-2">
        <AddTask addNewTask={addNewTask} />

        <div>
          <Tasks tasks={filTeresTask()} taskOperations={{ updateTask, deleteTask }} />
        </div>
      </div>
    </div>
  );
}
