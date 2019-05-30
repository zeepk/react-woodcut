import React from "react";
import "../App.css";
import { async } from "q";
export default function load_data() {
  // populate()
  //
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
  var player_name = "zee_pk";

  // console.log(player_name);
  this.state = {
    hits: [],
  };

  const proxyurl = "https://cors-anywhere.herokuapp.com/";



    fetch(proxyurl + "https://secure.runescape.com/m=hiscore/index_lite.ws?player=" + player_name)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));





  //loading in the data to arrays
  // console.log("running data for " + player_name)
  //   var skills = {}
  //   var minigames = {}
  //   var temp_data_array = res.split("\n")
  //   for (var i = 0; i < 28; i++) {
  //       var individual_skill_array = temp_data_array[i].split(",")
  //       var xp = individual_skill_array[2]
  //       xp = parseInt(xp, 10)
  //       skills[i] = {
  //           id: i,
  //           name: data_array[i][1],
  //           rank: individual_skill_array[0],
  //           level: individual_skill_array[1],
  //           xp: xp.toLocaleString('en')
  //       }//end skills[i]
  //   }//end for




  return (
    <div>
      <table id="stat-table" className="table">
        <thead className="table-primary">
          <tr>
            <th scope="col">Stat</th>
            <th scope="col">Level</th>
            <th scope="col">XP</th>
            <th scope="col">Rank</th>
          </tr>
        </thead>
        <tbody />
      </table>
    </div>
  );
}
