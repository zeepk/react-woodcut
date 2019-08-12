import React from "react";
import Table from 'react-bootstrap/Table';

function Osrs_fetch_stats (props) {
  var new_array = {};
  if(props.stats_array[1]){
    new_array = props.stats_array;
  }
  else{
    var new_obj = {
      name: " ",
      level: " ",
      xp: " ",
      rank: " "
    }
    for(var i=0; i<24; i++){
      new_array[i] = new_obj;
    }
  }
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
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/1_overall.png")} alt="Stats Symbol" />{new_array[0].name}</td>
                <td>{new_array[0].level}</td>
                <td>{new_array[0].xp}</td>
                <td>{new_array[0].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/2_attack.png")} alt="Stats Symbol" />{new_array[1].name}</td>
                <td>{new_array[1].level}</td>
                <td>{new_array[1].xp}</td>
                <td>{new_array[1].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/3_defence.png")} alt="Stats Symbol" />{new_array[2].name}</td>
                <td>{new_array[2].level}</td>
                <td>{new_array[2].xp}</td>
                <td>{new_array[2].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/4_strength.png")} alt="Stats Symbol" />{new_array[3].name}</td>
                <td>{new_array[3].level}</td>
                <td>{new_array[3].xp}</td>
                <td>{new_array[3].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/5_constitution.png")} alt="Stats Symbol" />{new_array[4].name}</td>
                <td>{new_array[4].level}</td>
                <td>{new_array[4].xp}</td>
                <td>{new_array[4].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/6_ranged.png")} alt="Stats Symbol" />{new_array[5].name}</td>
                <td>{new_array[5].level}</td>
                <td>{new_array[5].xp}</td>
                <td>{new_array[5].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/7_prayer.png")} alt="Stats Symbol" />{new_array[6].name}</td>
                <td>{new_array[6].level}</td>
                <td>{new_array[6].xp}</td>
                <td>{new_array[6].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/8_magic.png")} alt="Stats Symbol" />{new_array[7].name}</td>
                <td>{new_array[7].level}</td>
                <td>{new_array[7].xp}</td>
                <td>{new_array[7].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/9_cooking.png")} alt="Stats Symbol" />{new_array[8].name}</td>
                <td>{new_array[8].level}</td>
                <td>{new_array[8].xp}</td>
                <td>{new_array[8].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/10_woodcutting.png")} alt="Stats Symbol" />{new_array[9].name}</td>
                <td>{new_array[9].level}</td>
                <td>{new_array[9].xp}</td>
                <td>{new_array[9].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/11_fletching.png")} alt="Stats Symbol" />{new_array[10].name}</td>
                <td>{new_array[10].level}</td>
                <td>{new_array[10].xp}</td>
                <td>{new_array[10].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/12_fishing.png")} alt="Stats Symbol" />{new_array[11].name}</td>
                <td>{new_array[11].level}</td>
                <td>{new_array[11].xp}</td>
                <td>{new_array[11].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/13_firemaking.png")} alt="Stats Symbol" />{new_array[12].name}</td>
                <td>{new_array[12].level}</td>
                <td>{new_array[12].xp}</td>
                <td>{new_array[12].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/14_crafting.png")} alt="Stats Symbol" />{new_array[13].name}</td>
                <td>{new_array[13].level}</td>
                <td>{new_array[13].xp}</td>
                <td>{new_array[13].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/15_smithing.png")} alt="Stats Symbol" />{new_array[14].name}</td>
                <td>{new_array[14].level}</td>
                <td>{new_array[14].xp}</td>
                <td>{new_array[14].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/16_mining.png")} alt="Stats Symbol" />{new_array[15].name}</td>
                <td>{new_array[15].level}</td>
                <td>{new_array[15].xp}</td>
                <td>{new_array[15].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/17_herblore.png")} alt="Stats Symbol" />{new_array[16].name}</td>
                <td>{new_array[16].level}</td>
                <td>{new_array[16].xp}</td>
                <td>{new_array[16].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/18_agility.png")} alt="Stats Symbol" />{new_array[17].name}</td>
                <td>{new_array[17].level}</td>
                <td>{new_array[17].xp}</td>
                <td>{new_array[17].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/19_thieving.png")} alt="Stats Symbol" />{new_array[18].name}</td>
                <td>{new_array[18].level}</td>
                <td>{new_array[18].xp}</td>
                <td>{new_array[18].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/20_slayer.png")} alt="Stats Symbol" />{new_array[19].name}</td>
                <td>{new_array[19].level}</td>
                <td>{new_array[19].xp}</td>
                <td>{new_array[19].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/21_farming.png")} alt="Stats Symbol" />{new_array[20].name}</td>
                <td>{new_array[20].level}</td>
                <td>{new_array[20].xp}</td>
                <td>{new_array[20].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/22_runecrafting.png")} alt="Stats Symbol" />{new_array[21].name}</td>
                <td>{new_array[21].level}</td>
                <td>{new_array[21].xp}</td>
                <td>{new_array[21].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/23_hunter.png")} alt="Stats Symbol" />{new_array[22].name}</td>
                <td>{new_array[22].level}</td>
                <td>{new_array[22].xp}</td>
                <td>{new_array[22].rank}</td>
              </tr>
              <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/24_construction.png")} alt="Stats Symbol" />{new_array[23].name}</td>
                <td>{new_array[23].level}</td>
                <td>{new_array[23].xp}</td>
                <td>{new_array[23].rank}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
    }
    export default Osrs_fetch_stats;

