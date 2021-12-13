import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Ausfall from './PageRepair/Ausfall'
import DienstBoerse from './PageDienstBoerse/DienstBoerse'
import Umleitungen from './PageUmleitung/Umleitungen'
import LoginForm from './components/LoginForm'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import Cookies from './components/Cookies'
import { Games } from './PageGames/Games'

function App() {
  const adminUser = {
    email: "test@test.co",
    password: "11"
  }
  const [user, setUser] = useState({ name: "" });
  const [error, setError] = useState("");
  const Login = details => {
    console.log(details);
    if (details.password === adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
      });
    } else {
      // console.log("Password do not match!");
      setError("Passwort ist falsh!");
    }
  }
  const Logout = () => {
    setUser({ name: "" });
  }

  function NoMatch() {
    window.location.reload();
    return null;
  }

  return (
    <>
      
      <div className="App">

        {(user.name !== "") ? (
          <div >
            <>
              <Router>
                <div className="welcome">
                  <span>{user.name}</span>
                  <Link to="#" className="logout-icon">
                    <AiIcons.AiOutlineLogout onClick={Logout} />
                  </Link>

                </div>
                <Navbar />
                <Switch>
                <Route path='/' exact component={Games} />
                  <Route path='/ausfall' exact component={Ausfall} />
                  <Route path='/dienstboerse' component={DienstBoerse} />
                  <Route path='/umleitungen' component={Umleitungen} />
                  <Route component={NoMatch} />
                </Switch>
              </Router>
            </>
          </div>
        ) : (
          <div>
            <Cookies />
            <LoginForm Login={Login} error={error} />
          </div>
        )
        }
      </div>
    </>
  )
}

export default App;
