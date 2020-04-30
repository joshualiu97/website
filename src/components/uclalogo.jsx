import React, { Component } from "react";

class UCLAlogo extends Component {
  render() {
    return (
      <div>

        <div className="uclalogo">
          <p>UCLA</p>
          <p>&ensp;Computer</p>
          <p>&ensp;&ensp;Science</p>
          
          <div className="page-jump">
            <a className="jump-button" href="#experience">&#8681; &ensp; Experience</a>
            <a className="jump-button" href="#skills">&#8681; &ensp; Technical Skills</a>
          </div>

        </div>
      </div>
    );
  }
}

export default UCLAlogo;
