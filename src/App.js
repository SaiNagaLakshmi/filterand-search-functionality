import React from 'react';

import './App.css';

import {Switch,Route} from 'react-router-dom';
import DataBinding from './components/dataBinding';
import Newdata from './components/newdata';
import Newlogin from './components/newlogin';
import login from './components/login';
import Localstorage from './components/localstorage';
import Pushing from './components/pushing';
function App() {
  return (
    
    <Switch>
    <Route path="/dataBinding" component={DataBinding} />
    <Route path="/Newdata" component={Newdata} />
    <Route path="/Newlogin" component={Newlogin} />
    <Route path="/Login" component={login} />
    <Route path="/localstorage" component={Localstorage} />
    <Route path="/pushing" component={Pushing} />
    </Switch>
   
  );
}

export default App;
