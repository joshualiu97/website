import React, { Component } from "react";
import BCD_decoder from "../images/BCD_decoder.jpg";

class Skills extends Component {
  render() {
    return (
      <div className="skills" id="skills">
        <h1 className="skills-header">Technical Skills</h1>

        <img className="img-skills" src={BCD_decoder} alt="Bruin Racing Electrical System"></img>

        <ul className="skills-main-box">

          <li className="ind-skill-box">
            <div className="prog-lang">
              <p className="skill-title">Programming Languages</p>

              <ul className="list-skills">
                <li>C/C++</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>Java</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>x86-64 Assembly Language</li>
                <li>OCaml</li>
                <li>Prolog</li>
                <li>Scheme</li>
                
              </ul>
            </div>
          </li>
          
          <li className="ind-skill-box">
            <div className="fw-lib-tools">
              <p className="skill-title">Frameworks/Libraries/Tools</p>
            
              <ul className="list-skills">
                <li>Amazon Web Services</li>
                <li>PyQt5</li>
                <li>OpenCV</li>
                <li>React</li>
                <li>Node</li>
                <li>Gulp & SASS</li>
                <li>Git</li>
                <li>Linux</li>
                <li>Windows</li>
              </ul>
            </div>
          </li>

          <li className="ind-skill-box">
            <div className="hardware">
              <p className="skill-title">Hardware/Physical</p>

              <ul className="list-skills">
                <li>Soldering</li>
                <li>Raspberry Pi</li>
                <li>Arduino</li>
                <li>Computer Components</li>
                <li>Ceramics</li>
                <li>DMM</li>
                <li>Eagle PCD Design</li>
              </ul>
            </div>
          </li>

          <li className="ind-skill-box">
            <div className="coursework">

              <p className="skill-title">Relevant Coursework</p>

              <ul className="list-skills">
                <li>Machine Learning</li>
                <li>Programming Languages</li>
                <li>Operating System Principles</li>
                <li>Computer Architecture</li>
                <li>Machine Learning</li>
                <li>Software Construction</li>
                <li>Computer Organization & Architecture</li>
                <li>Data Structures and Algorithms</li>
                <li>Logic Design of Digital Systems</li>
                <li>Multivariable Calculus</li>
                <li>Linear Algebra</li>
              </ul>
            </div>
          </li>

        </ul>

      </div>
    );
  }
}

export default Skills;
