import React from "react";
import Table from 'react-bootstrap/Table';

function Fetch_minigames(props) {
  var new_array = {};
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
    export default Fetch_minigames;