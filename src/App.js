import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";import './App.css';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Home/Navbar/Navbar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import Services from './Components/Services/Services';
import Admin from './Components/Admin/Admin';
export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value = {[loggedInUser,setLoggedInUser]} >
      <Router>
       <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Navbar></Navbar>
            <Login/>
          </Route>
          <Route exact path="/test">
            <Navbar></Navbar>
            <Admin></Admin>
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Navbar></Navbar>
            <Dashboard></Dashboard>
          </PrivateRoute> 
          <Route path='*'>
            <h2 className = 'text-center py-5'> 4O4  not found .......</h2>
          </Route>
      </Switch>
    </Router>
  </userContext.Provider>
  );
}

export default App;
