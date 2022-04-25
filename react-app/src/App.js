import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('Title');
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => {
          setTitle(1000)
        }}>Click Me</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
