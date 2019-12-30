import React from "react";
import Table from 'react-bootstrap/Table';

function Fetch_minigames(props) {
  var new_array = [];
  if(props.minigame_data[30]){
    new_array = props.minigame_data;
  }
  else{
    var new_obj = {
      name: " ",
      score: " ",
      rank: " "
    }
    for(var i=0; i<58; i++){
      new_array[i] = new_obj;
    }
  }


  


      return (<div>
        <Table striped id="stat-table">
          <thead className="table-primary">
            <tr>
              <th scope="col">Minigame</th>
              <th scope="col">Score</th>
              <th scope="col">Rank</th>
            </tr>
          </thead>
          <tbody>
            {new_array.map((minigame, index) => {  
              return(
              <tr key={index}>              
              <td>{minigame.name}</td>
              <td>{minigame.score}</td>
              <td>{minigame.rank}</td>
            </tr>
            )
            })}
          </tbody>
        </Table>
      </div>);
    }
    export default Fetch_minigames;