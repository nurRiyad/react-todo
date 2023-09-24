import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeContest } from './components/StatusContext';

export default function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <ThemeContest>
        <Header />
        <Body />
        <Footer />
      </ThemeContest>
    </div>
  );
}
