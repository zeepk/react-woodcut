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
            use the search bar in the top right
          </p>
          <p>
              dashboard info coming soon...
              
          </p>


        </Jumbotron>
      </div>
    );
  }
}

export default OsrsHome;
