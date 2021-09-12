import './App.css';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login'
import Signup from './components/Signup'
import NoteSatate from './context/notes/NoteState';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }
  return (
   <>
   <NoteSatate>
    <Router>
      <Navbar showAlert={showAlert}/>
      <Alert alert={alert} />
      <div className="container">
        <Switch>
          <Route exact path='/'>
            <Home showAlert={showAlert} />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/login'>
            <Login showAlert={showAlert} />
          </Route>
          <Route exact path='/signup'>
            <Signup showAlert={showAlert} />
          </Route>
        </Switch>
      </div>
    </Router>
   </NoteSatate>
   </>
  );
}

export default App;
