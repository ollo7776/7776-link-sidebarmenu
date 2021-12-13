import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import Home from './pages/Home'
import Ausfall from './PageDienstBoerse/Ausfall'
import DienstBoerse from './PageDienstBoerse/DienstBoerse'
import Umleitungen from './PageUmleitung/Umleitungen'
// import JavaApps from './pages/JavaApps'
// import DecodeQrCode from './pcodes/DecodeQrCode'
// import Validate24Hours from './pcodes/Validate24Hours'
// import HumanTime from './pcodes/HumanTime'
// import WorkingDays from './pcodes/WorkingDays'
// import Meetings from './pcodes/Meetings'
// import CalendarWeek from './pcodes/CalendarWeek'
// import UnluckyDays from './pcodes/UnluckyDays'
// import DiktatCheck from './pcodes/DiktatCheck'
// import Letters from './pcodes/Letters'
// import Spielchen from './pcodes/Spielchen'
import LoginForm from './components/LoginForm'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import Cookies from './components/Cookies'

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
                  <Route path='/' exact component={Ausfall} />
                  {/* <Route path='/ausfall' component={Ausfall} /> */}
                  <Route path='/dienstboerse' component={DienstBoerse} />
                  <Route path='/umleitungen' component={Umleitungen} />
                  {/* <Route path='/javaapps' component={JavaApps} />
                  <Route path='/decodeqrcode' component={DecodeQrCode} />
                  <Route path='/validate24hours' component={Validate24Hours} />
                  <Route path='/humantime' component={HumanTime} />
                  <Route path='/workingdays' component={WorkingDays} />
                  <Route path='/meetings' component={Meetings} />
                  <Route path='/calendarweek' component={CalendarWeek} />
                  <Route path='/unluckydays' component={UnluckyDays} />
                  <Route path='/diktatcheck' component={DiktatCheck} />
                  <Route path='/letters' component={Letters} />
                  <Route path='/spielchen' component={Spielchen} /> */}
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
