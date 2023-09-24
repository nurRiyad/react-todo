import { createContext, useState } from 'react';

export const StatusContest = createContext<'all' | 'not' | 'com'>('all');
export const StatusUpdateContext = createContext<((val: 'all' | 'not' | 'com') => void) | undefined>(undefined);

export function ThemeContest({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<'all' | 'not' | 'com'>('all');

  const toggleState = (val: 'all' | 'not' | 'com') => {
    setStatus(() => val);
  };

  return (
    <StatusContest.Provider value={status}>
      <StatusUpdateContext.Provider value={toggleState}>{children}</StatusUpdateContext.Provider>
    </StatusContest.Provider>
  );
}
