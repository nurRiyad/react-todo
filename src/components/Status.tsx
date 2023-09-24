import { useContext } from 'react';
import { StatusContest, StatusUpdateContext } from './StatusContext';

export default function Status() {
  const status = useContext(StatusContest);
  const statusUpdate = useContext(StatusUpdateContext);

  const handleClick = (name: 'all' | 'not' | 'com') => {
    if (statusUpdate) {
      statusUpdate(name);
    }
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
