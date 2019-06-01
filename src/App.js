import React from "react";
import SearchField from "react-search-field";
import "./App.css";
import Load_data from "./components/load_data";
import NameForm from "./components/NameForm";
import Parent_fetcher from "./components/parent_fetcher";
// import {Parent, Child} from "./components/testing";
import Fetch_stats from "./components/fetch_stats";
export default function App() {

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/darkly/bootstrap.min.css"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
      <nav id="topnav" className="navbar navbar-expand-lg navbar-dark bg-green">
        <a className="navbar-brand" href=" ">
          <img id="logo" src={require("./woodcutLogo.png")} alt="Site Logo" />
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

          {/* <input
            id="searchbox"
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            value=""
          />
          <input
            id="submitbutton"
            type="button"
            className="btn btn-secondary my-2 my-sm-0"
            onclick="populate()"
            value="Search"
          /> */}
          
          {/* <NameForm /> */}
        </div>
      </nav>

      {/* <!-- GRID --> */}
          
      <div className="grid-container">
        {/* stat table */}

        <div className="grid-item" id="stat-table">
          {/* <Fetch_stats /> */}
          <Parent_fetcher />
          {/* <Fetch_stats id="stat-fetching" username="zee_pk"/> */}
        </div>

        {/* player info */}
        <div className="grid-item" id="player-info">
          <div>
            <img id="avatar" src="" alt="avatar" />
          </div>
          <div>
            <h1 id="username"> </h1>
          </div>
          {/* player grid */}
          <div id="profile-info" className="grid-profile">
            <div className="grid-item-prof">
              <p>RuneScore:</p>
            </div>
            <div className="grid-item-prof">
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
        {/* activity table */}
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
