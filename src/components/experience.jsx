import React, { Component } from "react";
import BruinRacing from "../images/BruinRacing.jpg";
import IdeaHacks from "../images/IdeaHacks_2019.jpg";
import IEEE_car from "../images/IEEE_car.jpg";
import Amazon from "../images/amazon.png";
import UAS_input from "../images/uas-input.jpg";
import UAS_result from "../images/uas-result.jpg";
import ResistorReader from "../images/resistor-reader.png";

class Experience extends Component {
  render() {
    return (
      <div>
        <div className="experience" id="experience">
          <h1 className="exp-header">Experience</h1>
          <ul className="exp-list">
          <li className="Amazon">
              <img className="img-exp" src={Amazon} alt="Amazon Logo"></img>

              <p className="exp-title">Software Development Engineer Intern @ Amazon</p>
              <p className="exp-body">
                As a
                <mark className="orange"> software development engineer </mark>
                part of the
                <mark className="orange"> Worldwide Returns & ReCommerce Team</mark>,
                I am working to build systems revolving around the recommerce process with the "three Zeros" at Amazon in mind:
                <mark className="orange"> Zero cost of returns</mark>,
                <mark className="orange"> Zero waste</mark>, and
                <mark className="orange"> Zero defects</mark>.
                I mainly work with
                <mark className="orange"> Java </mark>
                and
                <mark className="orange"> TypeScript</mark>,
                building applications on
                <mark className="orange"> Amazon Web Services </mark>
                and utilizing various tools in the process. Some services I have worked with include
                <mark className="orange"> AWS Lambda</mark>,
                <mark className="orange"> AWS Step Functions</mark>,
                <mark className="orange"> AWS S3</mark>,
                <mark className="orange"> AWS VPC</mark>,
                <mark className="orange"> AWS API Gateway</mark>,
                and the
                <mark className="orange"> AWS Software and Cloud Development Kit</mark>.
              </p>
            </li>

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

            <li className="UAS">
              <p className="exp-title">Unmanned Aerial Systems @ UCLA</p>
              <p className="exp-body">
                As a member of
                <mark className="orange"> UCLA's Unmanned Aerial Systems</mark>,
                I work on the
                <mark className="orange"> Vision team </mark>
                to detect and classify targets from a drone. Real-time video from an autonomous drone is sent to a processing station 
                where computer vision and machine learning algorithms are then utilized for the detection and classification.
                My work includes researching ML models best fit for our use case, as well as experimenting with different computer 
                vision algorithms to get the best results, such as using K-means clustering and many methods of filtering.

                <img className="img-exp" src={UAS_input} alt="UAS Input"></img>
                <img className="img-exp" src={UAS_result} alt="UAS Result"></img>
              </p>
            </li>

            <li className="Bruin-Racing">
              <p className="exp-title">Bruin Racing @ UCLA</p>
              <p className="exp-body">
                As a member of
                <mark className="orange"> UCLA's Bruin Racing</mark>,
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

            <li className="LAHacks">
              <p className="exp-title">LAHacks 2019</p>
              <p className="exp-body">
                As a participant in
                <mark className="orange"> UCLA's LAHacks 2019</mark>,
                my team and I created
                <mark className="orange"> ResistorReader </mark>,
                which is an application to detect the resistance of a through-hole resistor. The idea came up since one of
                my team members were color blind and always had trouble determining the resistance of a resistor based on the color bands.
                My team researched on computer vision related techniques, resorting to blurring, filtering, and pixel processsing, as well as
                utilizing a dominant-color detection API to increase the accuracy of the readings. Below is the GitHub link to the project and
                an example of an image being processed.
                <br></br>
                <br></br>
                <a className="links" href="https://github.com/melodychn/ResistorReader" target="_blank" rel="noopener noreferrer">ResistorReader Github</a>
                <img className="img-exp" src={ResistorReader} alt="ResistorReader"></img>
              </p>
            </li>

            <li className="IdeaHacks">
              <p className="exp-title">IdeaHacks 2019</p>
              <p className="exp-body">
                As a participant in
                <mark className="orange"> UCLA's 2019 IdeaHacks</mark>,
                my team and I created
                <mark className="orange"> Smart Lock </mark>
                with features including
                <mark className="orange"> facial recognition, motion sensing, and LED light indicators </mark>
                with a
                <mark className="orange"> solenoid lock and a Raspberry Pi</mark>.
                SmartLock is a prototype of a high-tech lock built for luggages, helping keep travelers' luggages safe.
                <br></br>
                <br></br>
                <a className="links" href="https://github.com/jamqd/SmartLock" target="_blank" rel="noopener noreferrer">SmartLock Github</a>
                <img className="img-exp" src={IdeaHacks} alt="Bruin Racing Electrical System"></img>

                <u>Tools/Devices:</u>
                <br></br>Raspberry Pi
                <br></br>Pi Camera
                <br></br>Microsoft Facial Recognition API
                <br></br>Twillio API
                <br></br>Solenoid Lock
                <br></br>Transistors
                <br></br>Voltage Regulators
                <br></br>Accelerometer
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

          </ul>
        </div>
      </div>
    );
  }
}

export default Experience;
