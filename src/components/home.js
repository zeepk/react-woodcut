import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Nameform from './NameForm';

class home extends Component {
  render() {
    return (
      <div>
      <Nameform version='home'/>
        <Jumbotron>
          <h1>hello friend, select a game version above</h1>

          <p>
              things are still kinda in the works here... but feel free to test things out!
              
          </p>
              <p>ideas are welcome, RSN: zee pk</p>

        </Jumbotron>
      </div>
    );
  }
}

export default home;
