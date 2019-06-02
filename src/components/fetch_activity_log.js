import React, { Component } from "react";
import { Table } from 'react-bootstrap';

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
    fetch(
        proxyurl + "https://apps.runescape.com/runemetrics/profile/profile?user=" + player_name + "&activities=20"
    )
      .then(res => res.json())
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
    
    var data_array = [
        [0, 'Overall'],
        [1, 'Attack'],
        [2, 'Defence'],
        [3, 'Strength'],
        [4, 'Constitution'],
        [5, 'Ranged'],
        [6, 'Prayer'],
        [7, 'Magic'],
        [8, 'Cooking'],
        [9, 'Woodcutting'],
        [10, 'Fletching'],
        [11, 'Fishing'],
        [12, 'Firemaking'],
        [13, 'Crafting'],
        [14, 'Smithing'],
        [15, 'Mining'],
        [16, 'Herblore'],
        [17, 'Agility'],
        [18, 'Thieving'],
        [19, 'Slayer'],
        [20, 'Farming'],
        [21, 'Runecrafting'],
        [22, 'Hunter'],
        [23, 'Construction'],
        [24, 'Summoning'],
        [25, 'Dungeoneering'],
        [26, 'Divination'],
        [27, 'Invention'],
        [28, 'Bounty Hunter'],
        [29, 'BH: Rogue'],
        [30, 'Dominion Tower'],
        [31, 'The Crucible'],
        [32, 'Castle Wars'],
        [33, 'BA: Attacker'],
        [34, 'BA: Defender'],
        [35, 'BA: Collector'],
        [36, 'BA: Healer'],
        [37, 'Duel Tournament'],
        [38, 'Mobilizing Armies'],
        [39, 'Conquest'],
        [40, 'Fist of Guthix'],
        [41, 'GG: Resource Race'],
        [42, 'GG: Athletics'],
        [43, 'WE2: Armadyl Lifetime'],
        [44, 'WE2: Bandos Lifetime'],
        [45, 'WE2: Armadyl PvP Kills'],
        [46, 'WE2: Bandos PvP Kills'],
        [47, 'Heist Guard Level'],
        [48, 'Heist Robber Level'],
        [49, 'CFP 5 Game Average'],
        [50, 'UNK'],
        [51, 'UNK'],
        [52, 'Runescore'],
        [53, 'Easy Clues'],
        [54, 'Medium Clues'],
        [55, 'Hard Clues'],
        [56, 'Elite Clues'],
        [57, 'Master Clues'],
    ];
    function get_dates(dict) {
        var dates = {};
        try {
            var act_text = dict['activities'][0]['text']
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
            var act_text = dict['activities'][0]['text']
        }
        catch(error) {
            // alert("Player's profile may be set to Private.\nActivity data may be empty.")
            var empty_activities = {}
            for (var i=0; i<20; i++){
                empty_activities[i] = " ";
            }
            return empty_activities;
        }

        for (var j = 0; j < 20; j++) {
            // console.log(res_dict['activities'][j]['text'])
            var act_text = dict['activities'][j]['text']
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
      return <div>Loading...</div>;
    } else 
    {
      var new_array = organize_data(items);
      var date_array = get_dates(items);
      return (<div>
        <Table id="activity-table" className="table" align="right">
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
