import React, { Component } from "react";
import Table from 'react-bootstrap/Table';

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

  componentDidMount() {
    this._isMounted = true;
    console.log("mount called");

    console.log("running fetch");
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var player_name = " ";
    player_name = this.props.user.toString();

    player_name = player_name.toString();
    player_name = player_name.replace(" ", "+");
    player_name = player_name.replace("_", "+");
    fetch(
      proxyurl +
        "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" +
        player_name
    )
      .then(res => res.text())
      .then(
        result => {
          if (this._isMounted) {
            console.log("RESULT changing state");
            this.setState({
              isLoaded: true,
              items: result
            });
          }
        },

        error => {
          if (this._isMounted) {
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
      var player_name = " ";
      player_name = this.props.user.toString();

      player_name = player_name.toString();
      player_name = player_name.replace(" ", "+");
      player_name = player_name.replace("_", "+");
      fetch(
        proxyurl +
          "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" +
          player_name
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
    console.log("unmounted");
    this._isMounted = false;
  }

  render() {
    var os_data_array = [
      [0, "Overall"],
      [1, "Attack"],
      [2, "Defence"],
      [3, "Strength"],
      [4, "Hitpoints"],
      [5, "Ranged"],
      [6, "Prayer"],
      [7, "Magic"],
      [8, "Cooking"],
      [9, "Woodcutting"],
      [10, "Fletching"],
      [11, "Fishing"],
      [12, "Firemaking"],
      [13, "Crafting"],
      [14, "Smithing"],
      [15, "Mining"],
      [16, "Herblore"],
      [17, "Agility"],
      [18, "Thieving"],
      [19, "Slayer"],
      [20, "Farming"],
      [21, "Runecrafting"],
      [22, "Hunter"],
      [23, "Construction"],
      [24, "BH Hunter"],
      [25, "BH Rogues"],
      [26, "Total Clues"],
      [27, "Easy Clues"],
      [28, "Medium Clues"],
      [29, "Hard Clues"],
      [30, "Elite Clues"],
      [31, "Master Clues"],
      [32, "LMS Rank"]
    ];
    function organize_stat_data(dict, os_data_array) {
      var skills = {};

      try {
        var temp_data_array = dict.split("\n");
        var individual_skill_array = temp_data_array[5].split(",");
      } catch (error) {
        var empty_activities = {};
        for (var i = 0; i < 24; i++) {
          empty_activities[i] = " ";
        }
        console.log("empty stats");
        return empty_activities;
      }
      // console.log(dict)
      temp_data_array = dict.split("\n");

      for (i = 0; i < 24; i++) {
        individual_skill_array = temp_data_array[i].split(",");
        var xp = individual_skill_array[2];
        xp = parseInt(xp, 10);
        skills[i] = {
          id: i,
          name: os_data_array[i][1],
          rank: individual_skill_array[0],
          level: individual_skill_array[1],
          xp: xp.toLocaleString("en")
        };
      }
      return skills;
    }

    var { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <img src={require("../loading.gif")} alt="loading screen" />
        </div>
      );
    } else {
      var new_array = organize_stat_data(items, os_data_array);
      return (
        <div>
          <Table striped id="stat-table">
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
            </tbody>
          </Table>
        </div>
      );
    }
  }
}
