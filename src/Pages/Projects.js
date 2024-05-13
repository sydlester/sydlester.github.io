import React, { Component } from "react";
import '../Styles/Projects.css'
import '../Styles/Pages.css'
import '../Styles/starify_icon.png'
 
class Projects extends Component {
  render() {
    return (
      <div className="page-content">
        <h2>CODING PROJECTS</h2>
        <div className="project-container">
            <div className="project-image">
                <img  src={require('../Styles/starify_icon.png')} alt=""/>
            </div>
            <div className="project-info">
                <h2>STARIFY</h2>
                <div className="project-tags">
                    <span className="react">REACT</span>
                    <span className="node">NODE.JS</span>
                    <span className="javascript">JAVASCRIPT</span>
                    <span className="html">HTML/CSS</span>
                    <span className="oauth">O AUTH</span>
                </div>
                <p>A web client application that aggregates a user’s Spotify listening data from several time periods and presents a visualization in a retro arcade game UX. Integrates Spotify's OAuth services and several data-plane APIs.</p>
                <p>All logos and icons featured in the app were hand-drawn by me!</p>
                <div className="project-button-container">
                    <a className="github" href="https://github.com/sydlester/starify-app">GITHUB REPO</a>
                </div>
            </div>
        </div>
        <div className="project-container">
            <div className="project-image">
                <img  src={require('../Styles/MiniAmazonIcon.png')} alt=""/>
            </div>
            <div className="project-info">
                <h2>ECOMMERCE MARKETPLACE</h2>
                <div className="project-tags">
                    <span className="python">PYTHON</span>
                    <span className="flask">FLASK</span>
                    <span className="sql">SQL</span>
                    <span className="html">HTML/CSS</span>
                </div>
                <p>
                    A full-featured eCommerce site with products search, shopping cart, and purchase functions for buyer accounts, as well as inventory control, a product catalogue, and shipping management capabilities for sellers.
                </p>
                <p>
                    This was my first experience building a full-stack, multi-tier application.  We simulated the full software development life cycle (SDLC) from design to release, including site reliability engineering and DevOps.
                </p>
                <div className="project-button-container">
                    <a className="github" href="https://github.com/sydlester/mini-amazon-cs316">GITHUB REPO</a>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
 
export default Projects;