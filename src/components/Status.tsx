import { Status as StatusProps } from '../types';

export default function Status({ status, handleStatus }: StatusProps) {
  const handleClick = (name: 'all' | 'not' | 'com') => {
    handleStatus(name);
  };

  return (
    <div className="m-2 p-4 space-x-4  flex  justify-center">
      <button
        onClick={() => handleClick('all')}
        className={`p-3 rounded-md shadow-sm w-32 ${status === 'all' ? 'bg-indigo-700 text-white' : 'bg-gray-300'}`}
      >
        All
      </button>
      <button
        onClick={() => handleClick('com')}
        className={`p-3 rounded-md shadow-sm w-32 ${status === 'com' ? 'bg-indigo-700 text-white' : 'bg-gray-300'}`}
      >
        Complete
      </button>
      <button
        onClick={() => handleClick('not')}
        className={`p-3 rounded-md shadow-sm w-32 ${status === 'not' ? 'bg-indigo-700 text-white' : 'bg-gray-300'}`}
      >
        Not Complete
      </button>
    </div>
  );
}
