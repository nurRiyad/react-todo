import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
