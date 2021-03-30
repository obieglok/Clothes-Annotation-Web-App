
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter, Route ,Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import Register from './components/Register';
import  Test  from './components/Test';
import UploadFile from './components/AdminDashboard/UploadFile';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Switch>
        <Route path='/signin' component ={SignIn} />
        <Route path='/register' component ={Register} />
        <Route path='/about' component ={About} />
        <Route path='/contact' component ={Contact} />
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path='/dashboard' component ={AdminDashboard} />
=======
<<<<<<< Updated upstream
        <Route path='/test' component ={Test} />
=======
        <Route path='/dashboard' component ={AdminDashboard} />
>>>>>>> Stashed changes
>>>>>>> parent of cdbf828 (user table update)
=======
        <Route path='/test' component ={Test} />
>>>>>>> parent of bcf0861 (Merge pull request #39 from iamiraklis/userTableDashboard)
        <Route exact path='/' component ={Home} />
        <Route exact path='/uploadFile' component ={UploadFile} />
        <Route exact path='/adminDash' component ={AdminDashboard} />
      </Switch>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
