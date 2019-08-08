import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Nameform from './NameForm';

class OsrsHome extends Component {
  render() {
    return (
      <div>
              <Nameform version='osrs'/>

        <Jumbotron>
          <h1>Osrs</h1>
          <p>
            welcome to woodcut
          </p>
          <p>
              things are still kinda in the works here... but feel free to test things out!
              
          </p>
              <p>ideas are welcome, RSN: zee pk</p>

        </Jumbotron>
      </div>
    );
  }
}

export default OsrsHome;
