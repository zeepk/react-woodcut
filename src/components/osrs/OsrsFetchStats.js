import React from "react";
import Table from 'react-bootstrap/Table';
import Overall from '../../woodcut_stat_icons/1_overall.png'
import Attack from '../../woodcut_stat_icons/2_attack.png'
import Defence from '../../woodcut_stat_icons/3_defence.png'
import Strength from '../../woodcut_stat_icons/4_strength.png'
import Constitution from '../../woodcut_stat_icons/5_constitution.png'
import Ranged from '../../woodcut_stat_icons/6_ranged.png'
import Prayer from '../../woodcut_stat_icons/7_prayer.png'
import Magic from '../../woodcut_stat_icons/8_magic.png'
import Cooking from '../../woodcut_stat_icons/9_cooking.png'
import Woodcutting from '../../woodcut_stat_icons/10_woodcutting.png'
import Fletching from '../../woodcut_stat_icons/11_fletching.png'
import Fishing from '../../woodcut_stat_icons/12_fishing.png'
import Firemaking from '../../woodcut_stat_icons/13_firemaking.png'
import Crafting from '../../woodcut_stat_icons/14_crafting.png'
import Smithing from '../../woodcut_stat_icons/15_smithing.png'
import Mining from '../../woodcut_stat_icons/16_mining.png'
import Herblore from '../../woodcut_stat_icons/17_herblore.png'
import Agility from '../../woodcut_stat_icons/18_agility.png'
import Thieving from '../../woodcut_stat_icons/19_thieving.png'
import Slayer from '../../woodcut_stat_icons/20_slayer.png'
import Farming from '../../woodcut_stat_icons/21_farming.png'
import Runecrafting from '../../woodcut_stat_icons/22_runecrafting.png'
import Hunter from '../../woodcut_stat_icons/23_hunter.png'
import Construction from '../../woodcut_stat_icons/24_construction.png'

function Osrs_fetch_stats (props) {
  var new_array = [];
  var img_array = [Overall, Attack, Defence, Strength, Constitution, Ranged, Prayer, Magic, 
    Cooking, Woodcutting, Fletching, Fishing, Firemaking, Crafting, Smithing, Mining, Herblore, 
    Agility, Thieving, Slayer, Farming, Runecrafting, Hunter, Construction]
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
              {/* <tr>
                <td><img className="stat_icon" src={require("../../woodcut_stat_icons/1_overall.png")} alt="Stats Symbol" />{new_array[0].name}</td>
                <td>{new_array[0].level}</td>
                <td>{new_array[0].xp}</td>
                <td>{new_array[0].rank}</td>
              </tr> */}
              {new_array.map((skill, index) => {  
              return(
              <tr key={index}>
              <td><img className="stat_icon" src={img_array[index]} alt="Stats Symbol" />{skill.name}</td>
              <td>{skill.level}</td>
              <td>{skill.xp}</td>
              <td>{skill.rank}</td>
            </tr>
            )
            })}
            </tbody>
          </Table>
        </div>
      );
    }
    export default Osrs_fetch_stats;

