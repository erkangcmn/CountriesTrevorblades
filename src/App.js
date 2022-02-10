import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


//screens
import Navbar from "./screens/Navbar/Navbar"
import Graphic from "./screens/Graphic/Graphic"
import Home from "./screens/Home/Home"

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/graphic" component={Graphic} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
