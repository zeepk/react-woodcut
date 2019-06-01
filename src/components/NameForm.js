import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ' '};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.render = this.render.bind(this);
      }


      handleChange(event) {
        console.log("key press");
        this.setState({value: event.target.value});
        // event.preventDefault();
        
        // event.stopPropagation();
        // event.nativeEvent.stopImmediatePropagation();
      }

   

    handleSubmit(event) {
      //  event.preventDefault();
        let new_name = this.state.value;
        console.log(new_name)
        this.props.changeName(new_name);
        // var lang = this.state.value;
        // lang = lang.toString();
        // alert("Calling back: " + lang)
        // this.changeHandler(lang); 
        event.preventDefault();
        // event.stopPropagation();
        // event.nativeEvent.stopImmediatePropagation();
    }
    render() {
      return (
        // <React.Fragment>
        
        <div>
        <form onSubmit={this.handleSubmit}>
          {/* <label> */}
            Name:
            <input type="text" value={this.props.value} onChange={this.handleChange.bind(this)}/>
          {/* </label> */}
          <input type="submit" value="Submit" />
        </form>

      </div>
      );
    }
  }