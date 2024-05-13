import React, { Component } from "react";
import '../Styles/Pages.css'
import '../Styles/Projects.css'

class Current extends Component {
  render() {
    return (
      <div className="page-content">
        <h2>CURRENT PROJECTS</h2>
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
              <a className="github" href="https://foo.com">GITHUB REPO COMING SOON</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Current;