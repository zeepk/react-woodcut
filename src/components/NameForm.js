import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: " " };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("key press");
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    let new_name = this.state.value;
    console.log(new_name);
    this.props.changeName(new_name);

    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="searchbar"
            placeholder="Username"
            value={this.props.value}
            onChange={this.handleChange.bind(this)}
          />
          <Button variant="primary" type="submit">
            Enter
          </Button>
        </form>
      </div>
    );
  }
}
