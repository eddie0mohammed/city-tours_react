import React, { Component } from 'react';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/TourList';

import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Tours from './components/TourList/TourList';


class App extends Component {
  
  render(){
    return (
      <div className="App">
        {/* <Navbar /> */}
        {/* <TourList /> */}

        <Switch>
          <Route exact path='/' render={()=> <Home />}/>
          <Route exact path='/about' render={()=> <About />}/>
          <Route exact path='/tours' render={()=> <TourList />}/>

        </Switch>
        
      </div>
    );

  }
}

export default App;
