import React, { Component } from "react";
import FetchStats from "./OsrsFetchStats";
import FetchMinigames from "./OsrsFetchMinigames";
import FetchOsrsUserData from "./OsrsFetchUserData";
import NameForm from "../NameForm";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
export default class parent_fetcher_osrs extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "zezima" };
    this.render = this.render.bind(this);
    this.username = this.state.user.replace(" ", "+");
  }

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
              <Nav.Link href="/">RS3</Nav.Link>
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
              {/* username */}
              <h1 id="username">{this.nameWithSpaces()}</h1>
            </div>
            {/* player grid */}

            {/* user info component goes here */}
            <FetchOsrsUserData user={this.state.user} />
          </div>
          {/* activity table component goes here */}
          <div className="grid-item">
            <br />
            <br />
            <FetchMinigames user={this.state.user} />
          </div>
        </div>
      </div>
    );
  }
}
