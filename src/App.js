import React from "react";

import "./App.css";
import Load_data from "./load_data";

export default function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/darkly/bootstrap.min.css"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
      <nav id="topnav" className="navbar navbar-expand-lg navbar-dark bg-green">
        <a className="navbar-brand" href="">
          <img id="logo" src="woodcutLogo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0" onsubmit="return false;">  
      <input id="searchbox" className="form-control mr-sm-2" type="text" placeholder="Search" value="">
      <input id="submitbutton" type="button" className="btn btn-secondary my-2 my-sm-0" onclick="populate()" value="Search"></input> 
    </form> */}
        </div>
      </nav>



      {/* <!-- GRID --> */}

      <div className="grid-container">
        <div className="grid-item">
        <Load_data />
        </div>
        <div className="grid-item">
          <img src="loading.gif" id="loading" alt="loading" />

          <div>
            <img id="avatar" src="" alt="avatar" />
          </div>
          <div>
            <h1 id="username"> </h1>
          </div>
          <div id="profile-info" className="grid-profile">
            <div className="grid-item-prof">
              <p>RuneScore:</p>
            </div>
            <div className="grid-item-prof">
              {" "}
              <img src="RuneScore.png" alt="" /> <p id="runescore" />
            </div>
            <div className="grid-item-prof">
              <small>Rank:</small>
            </div>
            <div className="grid-item-prof">
              <p id="runescore-rank" />
            </div>

            <div className="grid-item-prof">
              <p>Total XP:</p>
            </div>
            <div className="grid-item-prof">
              {" "}
              <img src="skillsIcon.png" alt="" /> <p id="total-xp" />
            </div>
            <div className="grid-item-prof">
              <small>Rank:</small>
            </div>
            <div className="grid-item-prof">
              <p id="total-xp-rank" />
            </div>
          </div>
        </div>

        <div className="grid-item">
          <table id="activity-table" className="table" align="right">
            <thead className="table-primary">
              <tr>
                <th scope="col">Activity Feed</th>
              </tr>
            </thead>
            <tbody />
          </table>
        </div>
      </div>
    </div>
  );
}
