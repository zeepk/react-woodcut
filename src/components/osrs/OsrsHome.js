import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Nameform from '../NameForm';
import Icon from '../../ios_share_icon.jpg'

class OsrsHome extends Component {
  render() {
    return (
      <div>
              <Nameform version='osrs'/>

        <Jumbotron>
          <h1>old school runescape</h1>
          <p>
          Bookmark this page (or your profile page) and use the search bar in the top right
          </p>
          <p>
          Using an iPhone and want the app? Hit the <img src={Icon} width="30" alt="share button"></img> icon below, scroll down, and select Add to Home Screen
              
          </p>


        </Jumbotron>
      </div>
    );
  }
}

export default OsrsHome;
