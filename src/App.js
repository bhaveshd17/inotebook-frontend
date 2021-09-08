import './App.css';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteSatate from './context/notes/NoteState';

function App() {
  return (
   <>
   <NoteSatate>
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
   </NoteSatate>
   </>
  );
}

export default App;
