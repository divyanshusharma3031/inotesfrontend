import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Notestate from "./Context/Notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alert from "./components/Alert";
import { useState } from "react";
import Footer from "./components/Footer";
function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <>
      <Notestate>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <Switch>
            <Route exact path="/">
              <Home showalert={showalert}/>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login showalert={showalert}/>
            </Route>
            <Route exact path="/signup">
              <Signup showalert={showalert}/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </Notestate>
    </>
  );
}
export default App;
