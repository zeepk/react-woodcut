import React, { Component } from "react";
import FetchStats from "./Rs3FetchStats";
import FetchMinigames from "./Rs3FetchMinigames";
import FetchActivityLog from "./Rs3FetchActivityLog";
import FetchUserData from "./Rs3FetchUserData";
import Img from "react-image";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Nameform from '../NameForm';

export default class parent_fetcher extends Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.match.params.id, data: {}, log: {}, user_data: " " };
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
    // console.log("running fetch");
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var player_name = " ";

    player_name = this.props.match.params.id;

    player_name = player_name.toString();
    player_name = player_name.replace(" ", "+");
    player_name = player_name.replace("_", "+");
    fetch(
      proxyurl +
        "https://secure.runescape.com/m=hiscore/index_lite.ws?player=" +
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
      .then(function(info){
        return fetch(
          proxyurl +
            "https://apps.runescape.com/runemetrics/profile/profile?user=" +
            player_name +
            "&activities=20"
        )
      })
      .then(res => res.json())
      // .then(res => this.setState({log: res}))
      .then(
        result => {this.setState({log: result})},
        
        
        error => {console.log("profile private");}
      )
  }
  render() {
    var data_array = [
      [0, "Overall"],
      [1, "Attack"],
      [2, "Defence"],
      [3, "Strength"],
      [4, "Constitution"],
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
      [24, "Summoning"],
      [25, "Dungeoneering"],
      [26, "Divination"],
      [27, "Invention"],
      [28, "Bounty Hunter"],
      [29, "BH: Rogue"],
      [30, "Dominion Tower"],
      [31, "The Crucible"],
      [32, "Castle Wars"],
      [33, "BA: Attacker"],
      [34, "BA: Defender"],
      [35, "BA: Collector"],
      [36, "BA: Healer"],
      [37, "Duel Tournament"],
      [38, "Mobilizing Armies"],
      [39, "Conquest"],
      [40, "Fist of Guthix"],
      [41, "GG: Resource Race"],
      [42, "GG: Athletics"],
      [43, "WE2: Armadyl Lifetime"],
      [44, "WE2: Bandos Lifetime"],
      [45, "WE2: Armadyl PvP Kills"],
      [46, "WE2: Bandos PvP Kills"],
      [47, "Heist Guard Level"],
      [48, "Heist Robber Level"],
      [49, "CFP 5 Game Average"],
      [50, "UNK"],
      [51, "UNK"],
      [52, "Runescore"],
      [53, "Easy Clues"],
      [54, "Medium Clues"],
      [55, "Hard Clues"],
      [56, "Elite Clues"],
      [57, "Master Clues"]
    ];

    var skills = {};
    var minigames = {};
    var activities = {};
    var dates = {};
    var data = {};

    function ogranize_user_data(dict) {
      try {
        var temp_data_array = dict.split("\n");
        var individual_skill_array = temp_data_array[2].split(",");
      } catch (error) {
        var empty_activities = {};
        for (var i = 0; i < 28; i++) {
          empty_activities[i] = " ";
        }
        return empty_activities;
      }
      // dict = JSON.stringify(data);
      // var temp_data_array = dict.split("\n");
      // var temp_data_array = dict;
      var individual_array = temp_data_array[52].split(",");
      var individual_data = individual_array[1];
      individual_data = parseInt(individual_data, 10);
      data[0] = individual_data;
      individual_data = individual_array[0];
      data[1] = individual_data;
      individual_array = temp_data_array[0].split(",");
      var another_individual_data = individual_array[2];
      another_individual_data = parseInt(another_individual_data, 10);
      another_individual_data = another_individual_data.toLocaleString();
      data[2] = another_individual_data;
      individual_data = individual_array[0];
      data[3] = individual_data;
    }
    function remove_negatives(neg) {
      if (neg < 0 || neg === "-1"){
        neg = 0;
      }
      return neg;
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
        individual_skill_array[1] = remove_negatives(individual_skill_array[1])
        individual_skill_array[2] = remove_negatives(individual_skill_array[2])
        var xp = individual_skill_array[2];
        xp = parseInt(xp, 10);
        if (individual_skill_array[0] === "-1"){
          individual_skill_array[0] = "Not Ranked";
        }
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

    function get_dates(dict) {
      try {
        /* eslint-disable no-unused-vars */
        var act_text = dict["activities"][11]["text"];
        /* eslint-enable no-unused-vars */
      } catch (error) {
        var empty_activities = {};
        for (var i = 0; i < 20; i++) {
          empty_activities[i] = " ";
        }

        return empty_activities;
      }
      for (var j = 0; j < 20; j++) {
        var act_date = dict["activities"][j]["date"];
        dates[j] = act_date;
      }
    }

    function organize_log_data(dict) {
      try {
        var test = dict;
      } catch (error) {
        console.log("error log")
        var empty_activities = {};
        // empty_activities[0] = "Player's RuneMetrics profile is set to private. No activity will be displayed.";
        // for (var i = 1; i < 20; i++) {
        //   empty_activities[i] = " ";
        // }
        // activities = empty_activities;
        return;
      }
      if(!dict["activities"]){
        if (dict["error"] === 'PROFILE_PRIVATE'){
        activities[0] = "Player's RuneMetrics profile is set to private. No activity will be displayed.";
        for (var i = 1; i < 20; i++) {
            activities[i] = " ";
          }
        }
      }
      else{
        var act_text;
        for (var j = 0; j < 20; j++) {
          act_text = dict["activities"][j]["text"];
          var xp_index = act_text.indexOf("XP");
          if (xp_index > 0) {
            var sub_1 = act_text.substring(0, xp_index - 6);
            var sub_2 = act_text.substring(xp_index + 2, act_text.length);
            act_text = sub_1 + "m XP" + sub_2;
          }
          activities[j] = act_text;
        }

      }
    }

    // fetch_rs3_data();

    organize_data(this.state.data, data_array);
    ogranize_user_data(this.state.user_data);
    organize_log_data(this.state.log);
    get_dates(this.state.log);

    // if (!skills[1] || !activities[0]){
    // // if (false){

    //   return(
    //     <div>
    //       <Nameform version='rs3'/>
    //       <div className="grid-container">
    //       <div className="grid-item" ></div>
    //       <div className="grid-item" ><img id="loading" src={require('../loading.gif')} alt="Site Logo" /></div>
    //       <div className="grid-item" ></div>
    //       </div>
          


    //     </div>
    //   )
    // }
    // else{
    return (
      <div>
        <Nameform version='rs3'/>

        {/* <!-- GRID --> */}

        <div className="grid-container">
          {/* stat table */}
          <div className="grid-item" id="stat-table">
            {/* stat table component goes here */}
            <br />
            <br />
            <FetchStats stats_array={skills} />
          </div>
          <div className="grid-item" id="player-info">
            <div>
              {/* avatar image */}
              <Img
                src={
                  "http://secure.runescape.com/m=avatar-rs/" +
                  this.nameWithPluses() +
                  "/chat.png"
                }
              />
            </div>
            <div>
              {/* username */}
              <h1 id="username">{this.nameWithSpaces()}</h1>
            </div>
            {/* player grid */}

            {/* user info component goes here */}
            <FetchUserData user_data={data} />
          </div>
          {/* activity table component goes here */}
          <div className="grid-item" id="align-right">
            <Tabs defaultActiveKey="activity" id="uncontrolled-tab-example">
              <Tab eventKey="activity" title="Activity">
                <FetchActivityLog activities={activities} dates={dates} />
              </Tab>
              <Tab eventKey="minigames" title="Minigame Stats">
                <FetchMinigames minigame_data={minigames} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    )};
  }

