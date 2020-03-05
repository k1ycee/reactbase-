import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/Navbar';
import DashBoard from './components/dashboard/DashBoard'
import Projectdetails from './components/projects/Projectdetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject';

class App extends Component{
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={DashBoard}/>
          <Route path='/project/:id' component={Projectdetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/newproject' component={CreateProject}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
  }
}
export default App;
