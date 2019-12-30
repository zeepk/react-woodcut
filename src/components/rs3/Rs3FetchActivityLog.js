import React from "react";
import Table from "react-bootstrap/Table";

function Fetch_activity_log(props) {
  var new_array = []; 
  var date_array = [];
  

  if(props.activities[0]){
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
              {new_array.map((activity, index) => {  
              return(
                <tr key={index} title={date_array[index]}>
                <td>{new_array[index]}</td>
              </tr>

            )
            })}
            </tbody>
          </Table>
        </div>
      );
    }
  
    export default Fetch_activity_log;