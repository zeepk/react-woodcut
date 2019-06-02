import React, { Component } from 'react'
import FetchStats from "./fetch_stats";
import NameForm from "./NameForm";
import FetchAvatar from "./fetch_avatar";
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

                        {/* stat table goes here */}
                        <FetchStats user={this.state.user} />

                    </div>


                    {/* player info */}
                    <div className="grid-item" id="player-info">
                        <div>
                            {
                                

                            }
                            {/* <FetchAvatar user={this.state.user} /> */}
                            {/* <img id="logo" src={require("https://cors-anywhere.herokuapp.com/http://secure.runescape.com/m=avatar-rs/zee+pk/chat.png")} alt="Site Logo" /> */}
                            <Img src={"https://cors-anywhere.herokuapp.com/http://secure.runescape.com/m=avatar-rs/" + this.nameWithPluses() + "/chat.png"} />
                        </div>
                        <div>
                            <h1 id="username">{this.nameWithSpaces()}</h1>
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


                {/* <h1>{this.state.user}</h1> */}


            </div>
        )
    }
}


