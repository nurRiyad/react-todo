import { useContext, useState } from 'react';
import type { Task } from '../types';
import AddTask from './AddTask';
import { StatusContest } from './StatusContext';
import Tasks from './Tasks';

export default function Body() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const status = useContext(StatusContest);

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

  const deleteTask = (id: string) => {
    const ts = tasks.filter((el) => el.id !== id);
    setTasks(ts);
  };

  const filteredTask = () => {
    return tasks.filter((tsk) => {
      if (status === 'com') return tsk.completed === true;
      else if (status === 'not') return tsk.completed === false;
      else return true;
    });
  };
  return (
    <div className="flex-grow">
      <div className="max-w-xl mx-auto mt-2">
        <AddTask addNewTask={addNewTask} />
        <div>
          <Tasks tasks={filteredTask()} taskOperations={{ updateTask, deleteTask }} />
        </div>
      </div>
    </div>
  );
}
