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
          if (this._isMounted) {
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
          if (this._isMounted) {
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
      [50, 'AF15: Cow Tipping'],
      [51, 'AF15: Rats killed after the miniquest'],
      [52, 'Runescore'],
      [53, 'Easy Clues'],
      [54, 'Medium Clues'],
      [55, 'Hard Clues'],
      [56, 'Elite Clues'],
      [57, 'Master Clues'],
    ];
    function organize_data(dict, data_array) {

    //   var skills = {};
      var minigames = {};

      try {
        var temp_data_array = dict.split("\n");
        var individual_skill_array = temp_data_array[5].split(",");
      }
      catch (error) {

        var empty_activities = {}
        for (var i = 28; i < 58; i++) {
          empty_activities[i] = " ";
        }
        console.log("empty stats");
        // alert("Player not found.");
        return empty_activities;
      }
      // console.log(dict)
      var temp_data_array = dict.split("\n");

      for (var i = 28; i < 58; i++) {
        var individual_skill_array = temp_data_array[i].split(",");
        var score = individual_skill_array[1];
        if(individual_skill_array[0] === "-1"){
            individual_skill_array[0] = "Not Ranked";
        }
        if(score === "-1"){
            score = " ";
        }
        else{
            score = parseInt(score, 10);
            score = score.toLocaleString("en");
        }
        minigames[i] = {
          id: i,
          name: data_array[i][1],
          rank: individual_skill_array[0],
          score: score
        };
        // console.log(temp_data_array[1])
      }
      return minigames;
    }
    var { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div><img src={require("./loading.gif")} alt="loading screen" /></div>;
    } else {
      var new_array = organize_data(items, data_array)
      return (<div>
        <Table id="stat-table">
          <thead className="table-primary">
            <tr>
              <th scope="col">Minigame</th>
              <th scope="col">Score</th>
              <th scope="col">Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{new_array[28].name}</td>
              <td>{new_array[28].score}</td>
              <td>{new_array[28].rank}</td>
            </tr>
            <tr>
              <td>{new_array[29].name}</td>
              <td>{new_array[29].score}</td>
              <td>{new_array[29].rank}</td>
            </tr>
            <tr>
              <td>{new_array[30].name}</td>
              <td>{new_array[30].score}</td>
              <td>{new_array[30].rank}</td>
            </tr>
            <tr>
              <td>{new_array[31].name}</td>
              <td>{new_array[31].score}</td>
              <td>{new_array[31].rank}</td>
            </tr>
            <tr>
              <td>{new_array[32].name}</td>
              <td>{new_array[32].score}</td>
              <td>{new_array[32].rank}</td>
            </tr>
            <tr>
              <td>{new_array[33].name}</td>
              <td>{new_array[33].score}</td>
              <td>{new_array[33].rank}</td>
            </tr>
            <tr>
              <td>{new_array[34].name}</td>
              <td>{new_array[34].score}</td>
              <td>{new_array[34].rank}</td>
            </tr>
            <tr>
              <td>{new_array[35].name}</td>
              <td>{new_array[35].score}</td>
              <td>{new_array[35].rank}</td>
            </tr>
            <tr>
              <td>{new_array[36].name}</td>
              <td>{new_array[36].score}</td>
              <td>{new_array[36].rank}</td>
            </tr>
            <tr>
              <td>{new_array[37].name}</td>
              <td>{new_array[37].score}</td>
              <td>{new_array[37].rank}</td>
            </tr>
            <tr>
              <td>{new_array[38].name}</td>
              <td>{new_array[38].score}</td>
              <td>{new_array[38].rank}</td>
            </tr>
            <tr>
              <td>{new_array[39].name}</td>
              <td>{new_array[39].score}</td>
              <td>{new_array[39].rank}</td>
            </tr>
            <tr>
              <td>{new_array[40].name}</td>
              <td>{new_array[40].score}</td>
              <td>{new_array[40].rank}</td>
            </tr>
            <tr>
              <td>{new_array[41].name}</td>
              <td>{new_array[41].score}</td>
              <td>{new_array[41].rank}</td>
            </tr>
            <tr>
              <td>{new_array[42].name}</td>
              <td>{new_array[42].score}</td>
              <td>{new_array[42].rank}</td>
            </tr>
            <tr>
              <td>{new_array[43].name}</td>
              <td>{new_array[43].score}</td>
              <td>{new_array[43].rank}</td>
            </tr>
            <tr>
              <td>{new_array[44].name}</td>
              <td>{new_array[44].score}</td>
              <td>{new_array[44].rank}</td>
            </tr>
            <tr>
              <td>{new_array[45].name}</td>
              <td>{new_array[45].score}</td>
              <td>{new_array[45].rank}</td>
            </tr>
            <tr>
              <td>{new_array[46].name}</td>
              <td>{new_array[46].score}</td>
              <td>{new_array[46].rank}</td>
            </tr>
            <tr>
              <td>{new_array[47].name}</td>
              <td>{new_array[47].score}</td>
              <td>{new_array[47].rank}</td>
            </tr>
            <tr>
              <td>{new_array[48].name}</td>
              <td>{new_array[48].score}</td>
              <td>{new_array[48].rank}</td>
            </tr>
            <tr>
              <td>{new_array[49].name}</td>
              <td>{new_array[49].score}</td>
              <td>{new_array[49].rank}</td>
            </tr>
            <tr>
              <td>{new_array[50].name}</td>
              <td>{new_array[50].score}</td>
              <td>{new_array[50].rank}</td>
            </tr>
            <tr>
              <td>{new_array[51].name}</td>
              <td>{new_array[51].score}</td>
              <td>{new_array[51].rank}</td>
            </tr>
            <tr>
              <td>{new_array[52].name}</td>
              <td>{new_array[52].score}</td>
              <td>{new_array[52].rank}</td>
            </tr>
            <tr>
              <td>{new_array[53].name}</td>
              <td>{new_array[53].score}</td>
              <td>{new_array[53].rank}</td>
            </tr>
            <tr>
              <td>{new_array[54].name}</td>
              <td>{new_array[54].score}</td>
              <td>{new_array[54].rank}</td>
            </tr>
            <tr>
              <td>{new_array[55].name}</td>
              <td>{new_array[55].score}</td>
              <td>{new_array[55].rank}</td>
            </tr>
            <tr>
              <td>{new_array[56].name}</td>
              <td>{new_array[56].score}</td>
              <td>{new_array[56].rank}</td>
            </tr>
            <tr>
              <td>{new_array[57].name}</td>
              <td>{new_array[57].score}</td>
              <td>{new_array[57].rank}</td>
            </tr>
          </tbody>
        </Table>
      </div>);
    }
  }
}
