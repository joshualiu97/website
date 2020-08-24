import React, { Component } from "react";
import profile from "../images/joshualiu.jpg";

class Profile extends Component {
  render() {
    return (
      <div className="box">
        <img className="profile" src={profile} alt="profile" />
        <div className="aboutMe">
          Hello! I am Joshua Liu, a third-year student at UCLA majoring in
          Computer Science. I am interning at Amazon this summer as
          a software development engineer. My interests include the fields of computer vision,
          artificial intelligence, and machine learning. Visit my social links below!
        </div>

        <div className="social">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/joshualiu97"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/joshualiu97"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/joshua.liu.97"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
