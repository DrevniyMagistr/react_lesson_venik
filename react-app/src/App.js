import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
