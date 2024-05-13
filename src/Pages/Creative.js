import React, { Component } from "react";
import '../Styles/Pages.css'
import ChronImageSlider from "../Components/ChronImageSlider";
import '../Styles/Creative.css'
import ArtImageSlider from "../Components/ArtImageSlider";

class Creative extends Component {
  render() {
    return (
      <div className="page-content">
        <h2>CREATIVE PROJECTS</h2>
        <div className="creative-container">
          <div className="creative-description">
            <h2>DUKE CHRONICLE</h2>
            <p>
              I'm a staff photographer for Duke's student run newspaper. 
              I cover a variety of sports, but obviously my favorite is basketball.
            </p>
            <p>
              These are some of my favorite photos I've taken for the Chronicle,
              but you can see all of my published work at the link below.
            </p>
            <div className="creative-button-container">
              <a className="chronicle" href="https://www.dukechronicle.com/staff/sydney-lester">PUBLISHED PHOTOS</a>
            </div>
          </div>
          <div className="slider-container">
            <ChronImageSlider />
          </div>
        </div>
        <div className="creative-container">
          <div className="creative-description">
            <h2>VISUAL ARTS</h2>
            <p>
              I have been drawing for as long as I can remember. I love to experiment with all kinds of mediums, but recently I've been working on digital
              art (I've made merchandise for most of the clubs I'm part of!), as well as painting. 
            </p>
            <p>
              I love all things creative, and I'm always looking for new kinds of art and mediums to try. Right now, I'm learning how to crochet.
            </p>
            <p>
              You can see more of my work at the link below!
            </p>
            <div className="creative-button-container">
              <a className="art" href="#/AllArt"> MORE ARTWORK</a>
            </div>
          </div>
          <div className="slider-container">
            <ArtImageSlider />
          </div>
        </div>
        {/* <div className="creative-container">
          <div className="creative-description">
            <h2>WXDU DJ</h2>
            <p>
              Description
            </p>
            <p>
              Description 2
            </p>
            <div className="creative-button-container">
              <a className="chronicle" href="https://wxdu.org/plmanager/world/djplaylists.php?id=799">MY PLAYLISTS</a>
            </div>
          </div>
          {/* <div className="slider-container">
            <ArtImageSlider />
          </div>
        </div> */}
      </div>
    );
  }
}
 
export default Creative;