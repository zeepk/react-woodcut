import React, { Component } from "react";
import FetchStats from "./OsrsFetchStats";
import FetchMinigames from "./OsrsFetchMinigames";
import FetchOsrsUserData from "./OsrsFetchUserData";
import Nameform from '../NameForm';
export default class parent_fetcher_osrs extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "zezima", data: {}, user_data: " "  };
    this.render = this.render.bind(this);
    this.username = this.state.user.replace(" ", "+");
    this.componentDidMount = this.componentDidMount.bind(this);

  }

  nameWithPluses() {
    var username = this.state.user.replace(" ", "+");
    username = username.replace("_", "+");
    return username;
  }

  nameWithSpaces() {
    if(!this.props.match){
      return;
    }
    var username = this.props.match.params.id.replace("+", " ");
    username = username.replace("_", " ");
    return username;
  }
  componentDidMount() {
    console.log("running osrs fetch");
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var player_name = " ";

    player_name = this.props.match.params.id;

    player_name = player_name.toString();
    player_name = player_name.replace(" ", "+");
    player_name = player_name.replace("_", "+");
    fetch(
      proxyurl +
        "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" +
        player_name
    )
      .then(res => res.text())
      // .then(res => this.setState({data: res}))
      .then(
        result => {
          // console.log("got data: " + result)
          
          this.setState({data: result, user_data: result})
 
        },

        error => {
          console.log("ERROR changing state");
        }
      )

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

    var skills = {};
    var minigames = {};

    var data = {};
    function remove_negatives(neg) {
      if (neg < 0 || neg === "-1"){
        neg = 0;
      }
      return neg;
    }
    function organize_stat_data(dict, os_data_array) {


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
        individual_skill_array[1] = remove_negatives(individual_skill_array[1])
        individual_skill_array[2] = remove_negatives(individual_skill_array[2])
        var xp = individual_skill_array[2];
        xp = parseInt(xp, 10);
        if (individual_skill_array[0] < 0){
          individual_skill_array[0] = "Not Ranked";
        }
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

    function ogranize_user_data(dict) {
      try {
        var temp_data_array = dict.split("\n");
        /* eslint-disable no-unused-vars */
        var individual_skill_array = temp_data_array[5].split(",");
        /* eslint-enable no-unused-vars */
      } catch (error) {
        var empty_activities = {};
        for (var i = 0; i < 28; i++) {
          empty_activities[i] = " ";
        }
        console.log("empty stats");
        return empty_activities;
      }


      temp_data_array = dict.split("\n");

      var individual_array = temp_data_array[0].split(",");
      for (i = 0; i < 3; i++) {
        individual_array[i] = parseInt(individual_array[i], 10);
        data[i] = individual_array[i];

      }


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


    }
    

    function organize_data(dict, data_array) {
      try {
        var temp_data_array = dict.split("\n");
        var individual_skill_array = temp_data_array[5].split(",");
      } catch (error) {
        var empty_activities = {};
        for (var i = 0; i < 28; i++) {
          empty_activities[i] = " ";
        }
        return empty_activities;
      }
      temp_data_array = dict.split("\n");

      for (i = 0; i < 28; i++) {
        individual_skill_array = temp_data_array[i].split(",");
        var xp = individual_skill_array[2];
        xp = parseInt(xp, 10);
        skills[i] = {
          id: i,
          name: data_array[i][1],
          rank: individual_skill_array[0],
          level: individual_skill_array[1],
          xp: xp.toLocaleString("en")
        };
      }
      for (i = 28; i < 58; i++) {
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
          name: data_array[i][1],
          rank: individual_skill_array[0],
          score: score
        };
      }
    }

    organize_stat_data(this.state.data, os_data_array);
    ogranize_user_data(this.state.data);
    return (
      <div>
        <Nameform version='osrs'/>

        {/* <!-- GRID --> */}

        <div className="grid-container">
          {/* stat table */}

          <div className="grid-item" id="stat-table">
            {/* stat table component goes here */}
            <br />
            <br />
            <FetchStats stats_array={skills} />
          </div>

          {/* player info */}
          <div className="grid-item" id="player-info">
            <div>
              {/* username */}
              <h1 id="username">{this.nameWithSpaces()}</h1>
            </div>
            {/* player grid */}

            {/* user info component goes here */}
            <FetchOsrsUserData user_data={data} />
          </div>
          {/* activity table component goes here */}
          <div className="grid-item">
            <br />
            <br />
            <FetchMinigames minigame_data={minigames} />
          </div>
        </div>
      </div>
    );
  }
}
