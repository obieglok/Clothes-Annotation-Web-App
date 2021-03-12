
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter, Route ,Switch } from 'react-router-dom';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import register from './components/register';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <h3>Work in Progress</h3>

        
      <switch>
        <Route exact path='/login' component={SignIn} />
      </switch>
      <switch>
        <Route exact path='/register' component={register} />
      </switch>
        
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
