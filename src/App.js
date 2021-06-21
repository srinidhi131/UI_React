import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Home from './components/pages/home'
import{BrowserRouter as Router , Switch , Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component = {Home}/>
        </Switch>
      </Router>

    </>
  );
}

export default App;
