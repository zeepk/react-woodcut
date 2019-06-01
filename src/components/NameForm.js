import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ' '};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


      handleChange(event) {
        this.setState({value: event.target.value});
      }
   

    handleSubmit() {
      alert('A name was submitted: ' + this.state.value);
        this.props.changeName(this.state.value);
        // var lang = this.state.value;
        // lang = lang.toString();
        // alert("Calling back: " + lang)
        // this.changeHandler(lang);
        
    //   event.preventDefault();
    }
    render() {
      return (
        <React.Fragment>
        {/* <Fetch_stats username={this.state.value} /> */}
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.props.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
      );
    }
  }