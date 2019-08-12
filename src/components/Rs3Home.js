import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Nameform from './NameForm';

class Rs3Home extends Component {
  render() {
    return (
      <div>
              <Nameform version='rs3'/>

        <Jumbotron>
          <h1>runescape 3</h1>
          <p>
            use the search bar in the top right
          </p>
          <p>
              more info coming here soon...
              
          </p>


        </Jumbotron>
      </div>
    );
  }
}

export default Rs3Home;
