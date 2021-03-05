
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter, Route ,Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <h3>Work in Progress</h3>
      </div>
    </BrowserRouter>
  );
}

export default App;
