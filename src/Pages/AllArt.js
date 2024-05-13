import '../Styles/Pages.css'
import React, { Component } from 'react';

class AllArt extends Component{
  render() {
    return (
      <div className='page-content'>
        <h2>ARTWORK</h2>
        <div className='allart-row'>
          <div className='allart-column'>
            <img src={require('../Images/Art5.jpg')} alt=""/>
            <img src={require('../Images/Art4.jpg')} alt=""/>
            <img src={require('../Images/Art2.jpg')} alt=""/>
          </div>
          <div className='allart-column'>
            <img src={require('../Images/Art1.jpg')} alt=""/>
            <img src={require('../Images/Art3.jpg')} alt=""/>
            <img src={require('../Images/AllArt/BlueDevilSticker.jpg')} alt=""/>
          </div>
          <div className='allart-column'>
            <img src={require('../Images/AllArt/PikeTable.jpg')} alt=""/>
            <img src={require('../Images/AllArt/SkiShirt.jpg')} alt=""/>
            <img src={require('../Images/AllArt/Sketchbook.jpg')} alt=""/>
            <img src={require('../Images/AllArt/Poster.jpg')} alt=""/>
          </div>
          <div className='allart-column'>
            <img src={require('../Images/AllArt/Table.jpg')} alt=""/>
            <img src={require('../Images/AllArt/Sketchbook1.jpg')} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default AllArt;