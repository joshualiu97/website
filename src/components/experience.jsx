import React, { Component } from "react";
import BruinRacing from "../images/BruinRacing.jpg";
import IdeaHacks from "../images/IdeaHacks_2019.jpg";
import IEEE_car from "../images/IEEE_car.jpg";

class Experience extends Component {
  render() {
    return (
      <div>
        <div className="experience" id="experience">
          <h1 className="exp-header">Experience</h1>
          <ul className="exp-list">
            <li className="Jalali-Lab">
              <p className="exp-title">Jalali Lab @ UCLA</p>
              <p className="exp-body">
                I am currently a
                <mark className="orange"> research assistant at UCLA's Jalali Lab</mark>,
                developing and utilizing
                <mark className="orange"> computer vision algorithms </mark>
                to perform
                <mark className="orange"> image segmentation </mark>
                on medical images of cells. We are working to
                generate a ground truth of our dataset and utilize
                <mark className="orange"> deep learning </mark>
                in order to
                <mark className="orange"> classify and predict </mark>
                cell boundaries and features.
                
                <br></br>
                <br></br>
                <u>Some concepts I have worked with before:</u>
                <br></br>Watershed
                <br></br>Otsu Binarization
                <br></br>Adaptive Thresholding
                <br></br>Gaussian Filtering
                <br></br>K-means Clustering
                <br></br>Contours
                <br></br>Polygon Fitting
                <br></br>Convex Hull
                <br></br>Morphology
                <br></br>
                <br></br>
                
                <u>Tools/Techincals:</u>
                <br></br>Spyder (IDE)
                <br></br>Python Imaging Library
                <br></br>Mahotas (Image Processing Library)
                <br></br>OpenCV
                <br></br>Skimage (Watershed, morphology)
                
                <br></br>OpenPyXL (Excel Processing in Python)
                <br></br>Scipy.io (matlab data format)
                <br></br>Image/File Extensions (jpg, png, gif, tif, mat)
                <br></br>paint.net

              </p>
            </li>

            <li className="Bruin-Racing">
              <p className="exp-title">Bruin Racing @ UCLA</p>
              <p className="exp-body">
                As a member of
                <mark className="orange"> UCLA's Bruin Racing, </mark>
                I work on the
                <mark className="orange"> Data Acquisition team </mark>
                to gather data about our
                <mark className="orange"> full-electric vehicle </mark>.
                In April 2019, our team participated in the
                <mark className="orange"> Shell Eco-Marathon Competition </mark>,
                competing against other schools across the world for the most
                <mark className="orange"> energy effficient vehicle</mark>.
                
                <img className="img-exp" src={BruinRacing} alt="Bruin Racing Electrical System"></img>
                
                <u>Tools/Devices:</u>
                <br></br>Arduino Nano, Arduino Uno
                <br></br>Current shunt
                <br></br>Current Sensor INA169
                <br></br>Hall Effect Sensor
                <br></br>Temperature Sensor
                <br></br>Voltage Divider
                <br></br>Buck Converter
                <br></br>Safety Fuses
                
              </p>
            </li>

            <li className="IEEE">
              <p className="exp-title">IEEE @ UCLA</p>
              <p className="exp-body">
                At 
                <mark className="orange"> UCLA's Institute of Electrical and Electronics Engineers Association </mark>,
                we build small projects to get hands on experience with
                <mark className="orange"> hardware and software </mark>
                related devices and utilize
                <mark className="orange"> Arduinos </mark>
                to create gadgets such as games, piano keys, and an autonomous car.
                
                <img className="img-exp" src={IEEE_car} alt="Bruin Racing Electrical System"></img>

                <u>Tools/Devices:</u>
                <br></br>Arduino Nano
                <br></br>Eagle PCB Program
                <br></br>Soldering
                <br></br>Breadboard
                <br></br>Radio Transmitter
                <br></br>Surface Mount Soldering
                <br></br>PID Control
                <br></br>Buttons
                <br></br>Resistors
                <br></br>Digital Multimeter
                
              </p>
            </li>

            <li className="IdeaHacks">
              <p className="exp-title">IdeaHacks 2019</p>
              <p className="exp-body">
                As a participant in
                <mark className="orange"> UCLA's 2019 IdeaHacks</mark>,
                my team and I created a
                <mark className="orange"> Smart Lock </mark>
                with features including
                <mark className="orange"> facial recognition, motion sensing, and LED light indicators </mark>
                with a
                <mark className="orange"> solenoid lock and a Raspberry Pi</mark>.
                
                <img className="img-exp" src={IdeaHacks} alt="Bruin Racing Electrical System"></img>

                <u>Tools/Devices:</u>
                <br></br>Raspberry Pi
                <br></br>Pi Camera
                <br></br>Microsoft Facial Recognition API
                <br></br>Twillio API (movement detection notice)
                <br></br>Solenoid Lock
                <br></br>Transistors
                <br></br>Voltage Regulators
                <br></br>Accelerometer

              </p>
          
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Experience;
