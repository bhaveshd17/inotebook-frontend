import './App.css';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login'
import Signup from './components/Signup'
import NoteSatate from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
   <>
   <NoteSatate>
    <Router>
      <Navbar />
      {/* <Alert message="hello" /> */}
      <div className="container">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
   </NoteSatate>
   </>
  );
}

export default App;
