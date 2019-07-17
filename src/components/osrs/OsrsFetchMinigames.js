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
    function organize_minigame_data(dict, os_data_array) {
      var minigames = {};

      try {
        var temp_data_array = dict.split("\n");
        var individual_skill_array = temp_data_array[5].split(",");
      } catch (error) {
        var empty_activities = {};
        for (var i = 24; i < 33; i++) {
          empty_activities[i] = " ";
        }
        console.log("empty stats");
        return empty_activities;
      }
      temp_data_array = dict.split("\n");

      for (i = 24; i < 33; i++) {
        individual_skill_array = temp_data_array[i].split(",");
        var score = individual_skill_array[1];
        if (individual_skill_array[0] === "-1") {
          individual_skill_array[0] = "Not Ranked";
        }
        if (score === "-1") {
          score = " ";
        } else {
          score = parseInt(score, 10);
          score = score.toLocaleString("en");
        }
        minigames[i] = {
          id: i,
          name: os_data_array[i][1],
          rank: individual_skill_array[0],
          score: score
        };
      }
      return minigames;
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
      var new_array = organize_minigame_data(items, os_data_array);
      return (
        <div>
          <Table striped id="stat-table">
            <thead className="table-primary">
              <tr>
                <th scope="col">Minigame</th>
                <th scope="col">Score</th>
                <th scope="col">Rank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{new_array[24].name}</td>
                <td>{new_array[24].score}</td>
                <td>{new_array[24].rank}</td>
              </tr>
              <tr>
                <td>{new_array[25].name}</td>
                <td>{new_array[25].score}</td>
                <td>{new_array[25].rank}</td>
              </tr>
              <tr>
                <td>{new_array[26].name}</td>
                <td>{new_array[26].score}</td>
                <td>{new_array[26].rank}</td>
              </tr>
              <tr>
                <td>{new_array[27].name}</td>
                <td>{new_array[27].score}</td>
                <td>{new_array[27].rank}</td>
              </tr>
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
            </tbody>
          </Table>
        </div>
      );
    }
  }
}
