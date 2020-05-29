import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoginHandles from './components/login/LoginHandles'
import Register from './components/register/Register';
import LoginScreen from './components/loginscreen/LoginScreen';
import Protected from './components/Protection/Protected';
import Login_Protected from './components/Protection/Login_Protected';
import ForgotPassword from './components/forgotpassword/ForgotPassword';
import LoginScreenAdmin from './components/loginscreenAdmin/LoginScreen';

function App() {
  return (

    <div>     
        <Router >
          <div>
          <Switch>
            <Route path="/register">
              <Protected Target={Register} />
            </Route>

            <Route path="/loginscreen-admin">
              <Login_Protected Target={LoginScreenAdmin} />
            </Route>

            <Route path="/loginscreen">
              <Login_Protected Target={LoginScreen} />
            </Route>

            <Route path="/fpassword">
              <ForgotPassword />
            </Route>

            <Route path="/">
              <Protected Target={LoginHandles} />
            </Route>
          </Switch>
          </div>
        </Router>
    </div>
  )
}

export default App;
