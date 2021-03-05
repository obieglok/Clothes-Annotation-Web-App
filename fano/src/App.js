
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter, Route ,Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component ={Home} />
        <Route path='/about' component ={About} />
        <Route path='/contact' component ={Contact} />
      </Switch>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
