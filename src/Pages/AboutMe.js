import '../Styles/Pages.css'
import React, { Component } from 'react';
import '../Styles/Projects.css'

class AboutMe extends Component{
  render() {
    return (
      <div className='page-content'>
        <div className='about-me-body'>
          <h2>HI! MY NAME IS SYDNEY.</h2>
            <p>I am a junior at Duke University majoring in computer science,
                and minoring in environmental policy & visual media studies.
            </p>
            <p>
                At Duke, I am a staff photographer for the Chronicle, a WXDU DJ (you can find my playlists <a href='https://wxdu.org/plmanager/world/djplaylists.php?id=799'>here</a>), and president of the club ski & board team.
                I am also a member of DTech, Duke's society for women in computer science and engineering.
            </p>
            <p>
            I’m an adventurous and outgoing student with a passion for problem-solving and creativity. As someone who finds joy in deriving order from complexity, I’m equally proficient in organizing both data and people. I have a keen interest in mathematics theory, databases, and user interface design, and I am excited for an opportunity to apply my creativity, skills and passions to impactful and innovative work.
            </p>
            <p>
              This website is a collection of my creative work, coding projects, and adventures. I hope you check it out!
            </p>
        </div>
        {/* <h2>EXPERIENCE</h2> */}

        {/* <h2>CURRENT PROJECTS</h2>
        <div className="project-container">
          <div className="project-image">
            icon
          </div>
          <div className="project-info">
            <h2>DJ STATS</h2>
            <div className="project-tags">
              <span className="react">TAG 1</span>
              <span className="node">TAG 2</span>
              <span className="javascript">TAG 3</span>
            </div>
            <p>Description</p>
            <p>Description</p>
            <div className="project-button-container">
              <a className="github" href="">GITHUB REPO COMING SOON</a>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
 
export default AboutMe;