import React, { Component } from "react";
import { Table } from 'react-bootstrap';

export default class fetch_stats extends Component {
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
      proxyurl +
        "https://secure.runescape.com/m=hiscore/index_lite.ws?player=" +
        player_name
    )
      .then(res => res.text())
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
      (proxyurl +
        "https://secure.runescape.com/m=hiscore/index_lite.ws?player=" +
        player_name)
    )
      .then(res => res.text())
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
    // alert("done updating");
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
    function organize_data(dict, data_array) {
      var skills = {};
      var minigames = {};
      // console.log(dict)
      var temp_data_array = dict.split("\n");

      for (var i = 0; i < 28; i++) {
        var individual_skill_array = temp_data_array[i].split(",");
        var xp = individual_skill_array[2];
        xp = parseInt(xp, 10);
        skills[i] = {
          id: i,
          name: data_array[i][1],
          rank: individual_skill_array[0],
          level: individual_skill_array[1],
          xp: xp.toLocaleString("en")
        };
        // console.log(temp_data_array[1])
      }
      return skills;
    }
    var { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else 
    {
      var new_array = organize_data(items, data_array)
      return (<div>
        <Table id="stat-table">
          <thead className="table-primary">
            <tr>
              <th scope="col">Stat</th>
              <th scope="col">Level</th>
              <th scope="col">XP</th>
              <th scope="col">Rank</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                  <td>{new_array[0].name}</td>
                  <td>{new_array[0].level}</td>
                  <td>{new_array[0].xp}</td>
                  <td>{new_array[0].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[1].name}</td>
                  <td>{new_array[1].level}</td>
                  <td>{new_array[1].xp}</td>
                  <td>{new_array[1].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[2].name}</td>
                  <td>{new_array[2].level}</td>
                  <td>{new_array[2].xp}</td>
                  <td>{new_array[2].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[3].name}</td>
                  <td>{new_array[3].level}</td>
                  <td>{new_array[3].xp}</td>
                  <td>{new_array[3].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[4].name}</td>
                  <td>{new_array[4].level}</td>
                  <td>{new_array[4].xp}</td>
                  <td>{new_array[4].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[5].name}</td>
                  <td>{new_array[5].level}</td>
                  <td>{new_array[5].xp}</td>
                  <td>{new_array[5].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[6].name}</td>
                  <td>{new_array[6].level}</td>
                  <td>{new_array[6].xp}</td>
                  <td>{new_array[6].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[7].name}</td>
                  <td>{new_array[7].level}</td>
                  <td>{new_array[7].xp}</td>
                  <td>{new_array[7].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[8].name}</td>
                  <td>{new_array[8].level}</td>
                  <td>{new_array[8].xp}</td>
                  <td>{new_array[8].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[9].name}</td>
                  <td>{new_array[9].level}</td>
                  <td>{new_array[9].xp}</td>
                  <td>{new_array[9].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[10].name}</td>
                  <td>{new_array[10].level}</td>
                  <td>{new_array[10].xp}</td>
                  <td>{new_array[10].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[11].name}</td>
                  <td>{new_array[11].level}</td>
                  <td>{new_array[11].xp}</td>
                  <td>{new_array[11].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[12].name}</td>
                  <td>{new_array[12].level}</td>
                  <td>{new_array[12].xp}</td>
                  <td>{new_array[12].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[13].name}</td>
                  <td>{new_array[13].level}</td>
                  <td>{new_array[13].xp}</td>
                  <td>{new_array[13].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[14].name}</td>
                  <td>{new_array[14].level}</td>
                  <td>{new_array[14].xp}</td>
                  <td>{new_array[14].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[15].name}</td>
                  <td>{new_array[15].level}</td>
                  <td>{new_array[15].xp}</td>
                  <td>{new_array[15].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[16].name}</td>
                  <td>{new_array[16].level}</td>
                  <td>{new_array[16].xp}</td>
                  <td>{new_array[16].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[17].name}</td>
                  <td>{new_array[17].level}</td>
                  <td>{new_array[17].xp}</td>
                  <td>{new_array[17].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[18].name}</td>
                  <td>{new_array[18].level}</td>
                  <td>{new_array[18].xp}</td>
                  <td>{new_array[18].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[19].name}</td>
                  <td>{new_array[19].level}</td>
                  <td>{new_array[19].xp}</td>
                  <td>{new_array[19].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[20].name}</td>
                  <td>{new_array[20].level}</td>
                  <td>{new_array[20].xp}</td>
                  <td>{new_array[20].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[21].name}</td>
                  <td>{new_array[21].level}</td>
                  <td>{new_array[21].xp}</td>
                  <td>{new_array[21].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[22].name}</td>
                  <td>{new_array[22].level}</td>
                  <td>{new_array[22].xp}</td>
                  <td>{new_array[22].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[23].name}</td>
                  <td>{new_array[23].level}</td>
                  <td>{new_array[23].xp}</td>
                  <td>{new_array[23].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[24].name}</td>
                  <td>{new_array[24].level}</td>
                  <td>{new_array[24].xp}</td>
                  <td>{new_array[24].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[25].name}</td>
                  <td>{new_array[25].level}</td>
                  <td>{new_array[25].xp}</td>
                  <td>{new_array[25].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[26].name}</td>
                  <td>{new_array[26].level}</td>
                  <td>{new_array[26].xp}</td>
                  <td>{new_array[26].rank}</td>
              </tr>
              <tr>
                  <td>{new_array[27].name}</td>
                  <td>{new_array[27].level}</td>
                  <td>{new_array[27].xp}</td>
                  <td>{new_array[27].rank}</td>
              </tr>
              </tbody>
        </Table>
      </div>);
    }
  }
}
