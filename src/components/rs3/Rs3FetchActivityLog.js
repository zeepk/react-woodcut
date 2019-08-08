import React from "react";
import Table from "react-bootstrap/Table";

function Fetch_activity_log(props) {
  var new_array, date_array = {};
  if(props.activities[1]){
    new_array = props.activities;
    date_array = props.dates;
  }
  else{
    for(var i=0; i<20; i++){
      new_array[i] = " ";
      date_array[i] = " ";
    }
  }

      return (
        <div>
          <Table striped id="activity-table" className="table" align="right">
            <thead className="table-primary">
              <tr>
                <th scope="col">Activity Feed</th>
              </tr>
            </thead>
            <tbody>
              <tr title={date_array[0]}>
                <td>{new_array[0]}</td>
              </tr>
              <tr title={date_array[1]}>
                <td>{new_array[1]}</td>
              </tr>
              <tr title={date_array[2]}>
                <td>{new_array[2]}</td>
              </tr>
              <tr title={date_array[3]}>
                <td>{new_array[3]}</td>
              </tr>
              <tr title={date_array[4]}>
                <td>{new_array[4]}</td>
              </tr>
              <tr title={date_array[5]}>
                <td>{new_array[5]}</td>
              </tr>
              <tr title={date_array[6]}>
                <td>{new_array[6]}</td>
              </tr>
              <tr title={date_array[7]}>
                <td>{new_array[7]}</td>
              </tr>
              <tr title={date_array[8]}>
                <td>{new_array[8]}</td>
              </tr>
              <tr title={date_array[9]}>
                <td>{new_array[9]}</td>
              </tr>
              <tr title={date_array[10]}>
                <td>{new_array[10]}</td>
              </tr>
              <tr title={date_array[11]}>
                <td>{new_array[11]}</td>
              </tr>
              <tr title={date_array[12]}>
                <td>{new_array[12]}</td>
              </tr>
              <tr title={date_array[13]}>
                <td>{new_array[13]}</td>
              </tr>
              <tr title={date_array[14]}>
                <td>{new_array[14]}</td>
              </tr>
              <tr title={date_array[15]}>
                <td>{new_array[15]}</td>
              </tr>
              <tr title={date_array[16]}>
                <td>{new_array[16]}</td>
              </tr>
              <tr title={date_array[17]}>
                <td>{new_array[17]}</td>
              </tr>
              <tr title={date_array[18]}>
                <td>{new_array[18]}</td>
              </tr>
              <tr title={date_array[19]}>
                <td>{new_array[19]}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
    }
  
    export default Fetch_activity_log;