import React, { Component } from "react";
import Table from 'react-bootstrap/Table';

function Osrs_fetch_minigames(props) {
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
    export default Osrs_fetch_minigames;
