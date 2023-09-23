export interface Task {
  name: string;
  completed: boolean;
  id: string;
}

export interface TaskOperation {
  updateTask: (taskname: string, isCompleted: boolean) => void;
  deleteTask: (taskName: string) => void;
}
