import React, { Component } from "react";
import FetchStats from "./Rs3FetchStats";
import FetchMinigames from "./Rs3FetchMinigames";
import FetchActivityLog from "./Rs3FetchActivityLog";
import FetchUserData from "./Rs3FetchUserData";
import NameForm from "../NameForm";
import Img from "react-image";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
export default class parent_fetcher extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "zezima" };
    this.render = this.render.bind(this);
    this.username = this.state.user.replace(" ", "+");
    // this.componentDidUpdate = this.componentDidUpdate.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);


  }
  // componentDidMount(){
  //   //create loading
  //   if(this.mytest) {
  //     this.mytest.innerHTML = "didmount";
  //  }
    

  // }
  // componentDidUpdate(){
  //   //create loading
  //   if(this.mytest) {
  //     this.mytest.innerHTML = "didupdate";
  //  }


    

  // }
  // shouldComponentUpdate(){
  //   //create loading
  //   if(this.mytest) {
  //     this.mytest.innerHTML = "should i update";
  //     return true;
  //  }
    

  // }



  nameWithPluses() {
    var username = this.state.user.replace(" ", "+");
    username = username.replace("_", "+");
    return username;
  }

  nameWithSpaces() {
    var username = this.state.user.replace("+", " ");
    username = username.replace("_", " ");
    return username;
  }


  render() {

    
    return (

      
      <div>
        <Navbar id="topnav" expand="lg">
          <a className="navbar-brand" href=" ">
            <img
              id="logo"
              src={require("../../woodcutLogo.png")}
              alt="Site Logo"
            />
          </a>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">RS3</Nav.Link>
              <Nav.Link href="/osrs">OSRS</Nav.Link>
            </Nav>
            {/* search goes here */}
            <NameForm
              user={this.state.user}
              changeName={user => this.setState({ user })}
            />
          </Navbar.Collapse>


        </Navbar>
        {/* <!-- GRID --> */}

        <div className="grid-container">
          {/* stat table */}

          <div className="grid-item" id="stat-table">
            {/* stat table component goes here */}
            <br />
            <br />
            <FetchStats user={this.state.user} />
          </div>

          {/* player info */}
          <div className="grid-item" id="player-info">
            <div>
              {/* avatar image */}
              <Img
                src={
                  "http://secure.runescape.com/m=avatar-rs/" +
                  this.nameWithPluses() +
                  "/chat.png"
                }
              />
            </div>
            <div>
              {/* username */}
              <h1 id="username">{this.nameWithSpaces()}</h1>
            </div>
            {/* player grid */}

            {/* user info component goes here */}
            <FetchUserData user={this.state.user} />
          </div>
          {/* activity table component goes here */}
          <div className="grid-item" id="align-right">
            <Tabs defaultActiveKey="activity" id="uncontrolled-tab-example">
              <Tab eventKey="activity" title="Activity">
                <FetchActivityLog user={this.state.user} />
              </Tab>
              <Tab eventKey="minigames" title="Minigame Stats">
                <FetchMinigames user={this.state.user} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
