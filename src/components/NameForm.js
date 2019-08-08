import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
export default class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "test" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("key press");

    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {

    var url = '';
    if(this.props.version === 'rs3'){
      url = '/rs3/' + this.state.value;
    }
    else if(this.props.version === 'osrs'){
      url = '/osrs/' + this.state.value;

    }
    else{
      alert("An error occured while deciding if you are on the RS3 page or the OSRS page.")
    }
    window.location.href = url; //relative to domain
    event.preventDefault(); 

  }
  render() {
    if (this.props.version === 'home'){
      
      return (
        <Navbar id="topnav" expand="lg">
            <a className="navbar-brand" href="/">
              <img
                id="logo"
                src={require("../woodcutLogo.png")}
                alt="Site Logo"
              />
            </a>
     
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/rs3">RS3</Nav.Link>
                <Nav.Link href="/osrs">OSRS</Nav.Link>
              </Nav>
              {/* search goes here */}
              
            </Navbar.Collapse>
          </Navbar>
     
      );
    }
    else{

    
    return (
      <Navbar id="topnav" expand="lg">
          <a className="navbar-brand" href="/">
            <img
              id="logo"
              src={require("../woodcutLogo.png")}
              alt="Site Logo"
            />
          </a>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/rs3">RS3</Nav.Link>
              <Nav.Link href="/osrs">OSRS</Nav.Link>
            </Nav>
            {/* search goes here */}
            <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="searchbar"
              placeholder="Username"
              value={this.props.value}
              onChange={this.handleChange.bind(this)}
            />
            <Button variant="primary" onClick={this.handleSubmit}>
              Enter
            </Button>
            </form>
          </Navbar.Collapse>
        </Navbar>
    );
  }
  }
}
