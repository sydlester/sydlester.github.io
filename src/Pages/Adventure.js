import React, { Component } from "react";
import '../Styles/Pages.css'
import SkiImageSlider from "../Components/SkiImageSlider";
import CameronImageSlider from "../Components/CameronImageSlider";
import NZImageSlider from "../Components/NZImageSlider";
import '../Styles/Creative.css'
import '../Styles/Adventure.css'

class Adventure extends Component {
  render() {
    return (
      <div className="page-content">
        <h2>FUN STUFF
        </h2>
        <div className="creative-container">
          <div className="creative-description">
            <h2>DUKE SKI & BOARD</h2>
            <p>
              I am the president of Duke's club ski & board team. We travel out west for training and across the southeast to compete against other USCSA schools. 
            </p>
            <p>
              I work with Duke Club Sports and USCSA to manage all of the team's logistics, finances, and recruitment. I have also designed all of our team merchandise!
            </p>
            <p>
              One of my primary goals for this season is to increase the accessibility of the team for all Duke students, by creating scholarship funds for equipment and organizing beginner-friendly trips.
            </p>
          </div>
          <div className="slider-container">
            <SkiImageSlider />
          </div>
        </div>
        <div className="adventure-container">
          <div className="slider-container">
            <NZImageSlider />
          </div>
          <div className="adventure-description">
            <h2>NEW ZEALAND!</h2>
            <p>
              I spent the fall semester of my junior year studying abroad at the University of Otago in Dunedin, New Zealand.
            </p>
            <p>
              While I was there, I took classes in both computer science and local ecology. I joined the Otago Snowsports Club and spent most weekends snowboarding in at the local ski fields in Wanaka.
              Once the ski season ended, I spent most of my free time backpacking in the Southern Alps.
            </p>
          </div>
        </div>
        <div className="creative-container">
          <div className="creative-description">
            <h2>CAMERON CRAZIES</h2>
            <p>
              When I'm not photographing Duke men's basketball games, you can find me in the student section (probably covered in blue paint).
            </p>
            <p>
              One of my favorite Duke traditions is camping out in Krzyzewskiville for weeks before the UNC game. I've tented every year since I was a freshman!
            </p>
            <p>
              Fun Fact: I've been featured on the official Duke men's basketball instagram account twice.
            </p>
          </div>
          <div className="slider-container">
            <CameronImageSlider />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Adventure;