import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Service';
import Products from './components/pages/Products';
import Signup from './components/pages/Signup';

function App() {
  return (
    <>
    <Router>
      <Navbar />
     <Switch>
      <Route path='/' exact  component={Home}/>
      <Route path='/services' component={Services}/>
      <Route path='/products' component={Products}/>
      <Route path='/signup' component={Signup}/>
     </Switch>
      </Router>
    </>
  );
}

export default App;
