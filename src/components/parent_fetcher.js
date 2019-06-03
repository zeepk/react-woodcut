import React, { Component } from 'react'
import FetchStats from "./fetch_stats";
import FetchActivityLog from "./fetch_activity_log";
import FetchUserData from "./fetch_user_data";
import NameForm from "./NameForm";
import Img from 'react-image';
export default class parent_fetcher extends Component {
    constructor(props) {
        super(props);
        this.state = { user: 'zee pk' };
        this.render = this.render.bind(this);
        this.username = this.state.user.replace(' ', '+');
    }

    nameWithPluses() {
        var username = this.state.user.replace(' ', '+');
        username = username.replace('_', '+');
        return username;
    }

    nameWithSpaces() {
        var username = this.state.user.replace('+', ' ');
        username = username.replace('_', ' ');
        return username;
    }
    //testing git

    render() {
        return (
            <div>
                <nav id="topnav" className="navbar navbar-expand-lg navbar-dark bg-green">
                    <a className="navbar-brand" href=" ">
                        <img id="logo" src={require("../woodcutLogo.png")} alt="Site Logo" />
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

                        {/* search goes here */}
                        <NameForm user={this.state.user} changeName={(user) => this.setState({ user })} />


                    </div>
                </nav>

                {/* <!-- GRID --> */}

                <div className="grid-container">
                    {/* stat table */}

                    <div className="grid-item" id="stat-table">

                        {/* stat table component goes here */}
                        <FetchStats user={this.state.user} />

                    </div>


                    {/* player info */}
                    <div className="grid-item" id="player-info">
                        <div>
                            {/* avatar image */}
                            <Img src={"http://secure.runescape.com/m=avatar-rs/" + this.nameWithPluses() + "/chat.png"} />
                        </div>
                        <div>
                            {/* username */}
                            <h1 id="username">{this.nameWithSpaces()}</h1>
                        </div>
                        {/* player grid */}
                     

                            {/* user info component goes here */}
                            <FetchUserData user={this.state.user} />
                        
                    </div>
                    {/* activity table component goes here */}
                    <div className="grid-item">
                        <FetchActivityLog user={this.state.user} />
                        {/* <table id="activity-table" className="table" align="right">
                            <thead className="table-primary">
                                <tr>
                                    <th scope="col">Activity Feed</th>
                                </tr>
                            </thead>
                            <tbody />
                        </table> */}
                    </div>
                </div>


                {/* <h1>{this.state.user}</h1> */}


            </div>
        )
    }
}


