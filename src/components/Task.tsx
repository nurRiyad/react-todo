import { CheckIcons } from '../assets/icons/CheckIcon';
import { CheckedIcon } from '../assets/icons/CheckedIcon';
import { DeleteIcons } from '../assets/icons/DeleteIcon';
import type { Task, TaskOperation } from '../types';

interface Props {
  task: Task;
  taskOperation: TaskOperation;
}

export default function Task({ task, taskOperation }: Props) {
  const handleCompleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    taskOperation.updateTask(task.id, !task.completed);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    taskOperation.deleteTask(task.id);
  };

  return (
    <li
      className="p-3 px-4 bg-gray-300 shadow-md rounded-sm hover:bg-indigo-700 hover:text-white
      transition-all duration-150 cursor-pointer"
      onClick={(e) => handleCompleteClick(e)}
    >
      <div className="flex justify-between">
        <p className={task.completed ? 'line-through' : ''}>{task.name}</p>
        <div className="space-x-4">
          <button onClick={(e) => handleCompleteClick(e)}>
            {task.completed && <CheckedIcon />}
            {!task.completed && <CheckIcons />}
          </button>
          <button onClick={(e) => handleDeleteClick(e)}>
            <DeleteIcons />
          </button>
        </div>
      </div>
    </li>
  );
}
