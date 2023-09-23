import type { Task as TaskType } from '../types';
import Task from './Task';

export default function Tasks({ tasks }: { tasks: Array<TaskType> }) {
  return (
    <ul className="space-y-3 mt-2">
      {tasks.map((task, index) => (
        <Task task={task.name} key={task.name + index} />
      ))}
    </ul>
  );
}
