import { useState } from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  const [status, setStatus] = useState<'all' | 'not' | 'com'>('all');

  const handleStatus = (newStatus: 'all' | 'not' | 'com') => {
    setStatus(newStatus);
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Body status={status} />
      <Footer handleStatus={handleStatus} status={status} />
    </div>
  );
}
