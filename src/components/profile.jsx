import React, { Component } from "react";
import profile from "../images/joshualiu.jpg";

class Profile extends Component {
  render() {
    return (
      <div className="box">
        <img className="profile" src={profile} alt="profile" />
        <div className="aboutMe">
          Hello! I am Joshua Liu, a Software Engineer working at Meta Platforms.
          I graduated from UCLA with a degree in Computer Science in June 2022.
          I interned at Facebook duing Fall 2021, and interned with Amazon during
          Summer 2021 and Summer 2020. My interests include backend, infra, fullstack,
          and anything related to data -- computer vision, AI, and ML. Visit my social links below! 
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
