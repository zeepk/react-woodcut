import React, { Component } from 'react'
import FetchStats from "./fetch_osrs_stats";
import FetchMinigames from "./fetch_osrs_minigames";
import FetchOsrsUserData from "./fetch_osrs_user_data";
import NameForm from "../NameForm";
import Img from 'react-image';

import { Link } from 'react-router-dom'
export default class parent_fetcher_osrs extends Component {
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
                        <img id="logo" src={require("../../woodcutLogo.png")} alt="Site Logo" />
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
                            <li className="nav-item">
                                <Link to="/">rs3</Link>
                            </li>
                            
                            <li className="nav-item active">
                                <Link to="/osrs">osrs</Link>
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
                        <br/><br/>
                        <FetchStats user={this.state.user} />
                        

                    </div>


                    {/* player info */}
                    <div className="grid-item" id="player-info">
                        
                        <div>
                            {/* username */}
                            <h1 id="username">{this.nameWithSpaces()}</h1>
                        </div>
                        {/* player grid */}
                     

                            {/* user info component goes here */}
                            <FetchOsrsUserData user={this.state.user} />
                        
                    </div>
                    {/* activity table component goes here */}
                    <div className="grid-item">
                    <br/><br/>
                        <FetchMinigames user={this.state.user} />
                    </div>
                </div>


                {/* <h1>{this.state.user}</h1> */}


            </div>
        )
    }
}

