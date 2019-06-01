import React, { Component } from "react";


export default class fetch_avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: " "

    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  // state = {
  //         error: null,
  //     isLoaded: false,
  //     items: " "  
  // }
//   shouldComponentUpdate() {
    
//     return false; // Will cause component to never re-render.
// }
 

  componentDidMount() {
    this._isMounted = true;
    console.log("mount called");
    
    // alert("running fetch");
    console.log("running fetch");
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var player_name = " "
      // alert("Prop received: " + this.props.user)
      player_name = this.props.user.toString();  
    
    player_name = player_name.toString();
    player_name = player_name.replace(' ', '+');
    player_name = player_name.replace('_', '+');
    // alert("The name: " + player_name);
    fetch(proxyurl + 
      "http://secure.runescape.com/m=avatar-rs/" + player_name + "/chat.png"
    )
      .then(res => res.blob())
      .then(
        result => {
          // alert("RESULT changing state");
            if(this._isMounted){
          console.log("RESULT changing state");
          this.setState({
            isLoaded: true,
            items: result
          });
        }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          if(this._isMounted){
          // alert("ERROR changing state");
          console.log("ERROR changing state");
          this.setState({
            isLoaded: true,
            error
          });
        }
        }
      
      );
      
    const { error, isLoaded, items } = this.state;
    // console.log(items);
  }

  componentDidUpdate(prevProps) {
    console.log("update called");
    
    if (prevProps.user !== this.props.user) {
      // alert("running fetch");
    console.log("running fetch");
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var player_name = " "
      // alert("Prop received: " + this.props.user)
      player_name = this.props.user.toString();  
    
    player_name = player_name.toString();
    player_name = player_name.replace(' ', '+');
    player_name = player_name.replace('_', '+');
    // alert("The name: " + player_name);
    fetch(proxyurl + 
      "http://secure.runescape.com/m=avatar-rs/" + player_name + "/chat.png"
    )
      .then(res => res.blob())
      .then(
        result => {

          console.log("RESULT changing state");
          this.setState({
            isLoaded: true,
            items: result
          });

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {

          console.log("ERROR changing state");
          this.setState({
            isLoaded: true,
            error
          });

        }
      
      );
    const { error, isLoaded, items } = this.state;

    }

  }
  componentWillUnmount() {
    console.log("unmounted")
    this._isMounted = false;
  }

  

  render() {
    


    var { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else 
    {

      return (<div>
        <img src={items}></img>
      </div>);
    }
  }
}
