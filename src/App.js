import React, { Component } from "react";
import "./Assets/css/default.min.css";
import Profile from "./components/profile";
import UCLAlogo from "./components/uclalogo";
import Experience from "./components/experience";
import Skills from "./components/skills"

class App extends Component {
  render() {
    return (
      <div>
        <div className="firstPage">
          <Profile />
          <UCLAlogo />
        </div>
        
        <div>
          <Experience />
        </div>

        <div>
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;
