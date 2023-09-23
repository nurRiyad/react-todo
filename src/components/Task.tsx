export default function Task({ task }: { task: string }) {
  return (
    <li
      className="p-2 pl-4 bg-gray-300 shadow-md rounded-sm hover:bg-indigo-700 hover:text-white
      transition-all duration-150"
    >
      {task}
    </li>
  );
}
