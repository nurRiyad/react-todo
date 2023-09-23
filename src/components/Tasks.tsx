import type { TaskOperation, Task as TaskType } from '../types';
import Task from './Task';

interface Props {
  tasks: Array<TaskType>;
  taskOperations: TaskOperation;
}

export default function Tasks({ tasks, taskOperations }: Props) {
  return (
    <ul className="space-y-3 mt-2">
      {tasks.map((task, index) => (
        <Task task={task} taskOperation={taskOperations} key={task.name + index} />
      ))}
    </ul>
  );
}
