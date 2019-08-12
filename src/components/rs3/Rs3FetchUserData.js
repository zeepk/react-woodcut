import React from "react";

function Fetch_user_data(props) {
    var new_array = {};
    if(props.user_data[1]){
      new_array = props.user_data;
    }
    else{

      for(var i=0; i<4; i++){
        new_array[i] = " ";
      }
    }


    

    return(


                
                    <div id="profile-info" className="grid-profile">
                        <div className="grid-item-prof">
                            <p>RuneScore:</p>
                        </div>
                        <div className="grid-item-prof">
                            <img src={require("../RuneScore.png")} alt="RuneScore Symbol" /> {new_array[0].toLocaleString()}
                        </div>
                        <div className="grid-item-prof" id="smaller">
                            <small>Rank:</small>
                        </div>
                        <div className="grid-item-prof">
                            {new_array[1]}
                            </div>

                        <div className="grid-item-prof">
                            <p>Total XP:</p>
                        </div>
                        <div className="grid-item-prof">
                            <img src={require("../skillsIcon.png")} alt="Stats Symbol" /> {new_array[2].toLocaleString()}
                        </div>
                        <div className="grid-item-prof" id="smaller">
                            <small>Rank:</small>
                        </div>
                        <div className="grid-item-prof">
                            {new_array[3]}
                        </div>
                    </div>
                
            );
    }
    

    export default Fetch_user_data;