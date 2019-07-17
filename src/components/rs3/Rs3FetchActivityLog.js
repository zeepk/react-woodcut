import React, { Component } from "react";
import Table from 'react-bootstrap/Table';


export default class fetch_activity_log extends Component {
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



  componentDidMount() {
    this._isMounted = true;
    console.log("mount called");
    
    console.log("running fetch");
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var player_name = " "
      player_name = this.props.user.toString();  
    
    player_name = player_name.toString();
    player_name = player_name.replace(' ', '+');
    player_name = player_name.replace('_', '+');
    fetch(
        proxyurl + "https://apps.runescape.com/runemetrics/profile/profile?user=" + player_name + "&activities=20"
    )
      .then(res => res.json())
      .then(
        result => {
            if(this._isMounted){
          console.log("RESULT changing state");
          this.setState({
            isLoaded: true,
            items: result
          });
        }
        },

        error => {
          if(this._isMounted){
          console.log("ERROR changing state");
          this.setState({
            isLoaded: true,
            error
          });
        }
        }
      
      );
      

  }

  componentDidUpdate(prevProps) {
    console.log("update called");
    
    if (prevProps.user !== this.props.user) {
    console.log("running fetch");
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var player_name = " "
      player_name = this.props.user.toString();  
    
    player_name = player_name.toString();
    player_name = player_name.replace(' ', '+');
    player_name = player_name.replace('_', '+');
    fetch(
      (proxyurl + "https://apps.runescape.com/runemetrics/profile/profile?user=" + player_name + "&activities=20")
    )
      .then(res => res.json())
      .then(
        result => {

          console.log("RESULT changing state");
          this.setState({
            isLoaded: true,
            items: result
          });

        },

        error => {

          console.log("ERROR changing state");
          this.setState({
            isLoaded: true,
            error
          });

        }
      
      );


    }

  }
  componentWillUnmount() {
    console.log("unmounted")
    this._isMounted = false;
  }

  

  render() {
    
    function get_dates(dict) {
        var dates = {};
        try {
          /* eslint-disable no-unused-vars */
            var act_text = dict['activities'][11]['text']
            /* eslint-enable no-unused-vars */
        }
        catch(error) {
            
            var empty_activities = {}
            for (var i=0; i<20; i++){
                empty_activities[i] = " ";
            }
            
            return empty_activities;
        }
        for (var j = 0; j < 20; j++) {
            var act_date = dict['activities'][j]['date']
            dates[j] = act_date;
           }
      return dates;
    }
    function organize_data(dict) {
        var activities = {};
        try {
            var act_text = dict['activities'][11]['text']
        }
        catch(error) {
            var empty_activities = {}
            for (var i=0; i<20; i++){
                empty_activities[i] = " ";
            }
            
            return empty_activities;
        }

        for (var j = 0; j < 20; j++) {
            act_text = dict['activities'][j]['text']
            var xp_index = act_text.indexOf('XP')
            if (xp_index > 0){
                var sub_1 = act_text.substring(0,xp_index-6)
                var sub_2 = act_text.substring(xp_index+2,act_text.length)
                act_text = sub_1 + 'm XP' + sub_2
            }
            activities[j] = act_text;
           }
      return activities;
    }
    var { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div><img src={require("../loading.gif")} alt="loading screen"/></div>;
    } else 
    {
      var new_array = organize_data(items);
      var date_array = get_dates(items);
      return (<div>
        <Table striped id="activity-table" className="table" align="right">
          <thead className="table-primary">
            <tr>
              <th scope="col">Activity Feed</th>
            </tr>
          </thead>
          <tbody>
              <tr title={date_array[0]}>
                  <td>{new_array[0]}</td>
              </tr>
              <tr title={date_array[1]}>
                  <td>{new_array[1]}</td>
              </tr>
              <tr title={date_array[2]}>
                  <td>{new_array[2]}</td>
              </tr>
              <tr title={date_array[3]}>
                  <td>{new_array[3]}</td>
              </tr>
              <tr title={date_array[4]}>
                  <td>{new_array[4]}</td>
              </tr>
              <tr title={date_array[5]}>
                  <td>{new_array[5]}</td>
              </tr>
              <tr title={date_array[6]}>
                  <td>{new_array[6]}</td>
              </tr>
              <tr title={date_array[7]}>
                  <td>{new_array[7]}</td>
              </tr>
              <tr title={date_array[8]}>
                  <td>{new_array[8]}</td>
              </tr>
              <tr title={date_array[9]}>
                  <td>{new_array[9]}</td>
              </tr>
              <tr title={date_array[10]}>
                  <td>{new_array[10]}</td>
              </tr>
              <tr title={date_array[11]}>
                  <td>{new_array[11]}</td>
              </tr>
              <tr title={date_array[12]}>
                  <td>{new_array[12]}</td>
              </tr>
              <tr title={date_array[13]}>
                  <td>{new_array[13]}</td>
              </tr>
              <tr title={date_array[14]}>
                  <td>{new_array[14]}</td>
              </tr>
              <tr title={date_array[15]}>
                  <td>{new_array[15]}</td>
              </tr>
              <tr title={date_array[16]}>
                  <td>{new_array[16]}</td>
              </tr>
              <tr title={date_array[17]}>
                  <td>{new_array[17]}</td>
              </tr>
              <tr title={date_array[18]}>
                  <td>{new_array[18]}</td>
              </tr>
              <tr title={date_array[19]}>
                  <td>{new_array[19]}</td>
              </tr>
              </tbody>
        </Table>
      </div>);
    }
  }
}
