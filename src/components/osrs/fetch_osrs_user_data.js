import React, { Component } from "react";


export default class fetch_osrs_user_data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: " "

        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }


    componentDidMount() {
        this._isMounted = true;
        console.log("mount called");

        // alert("running fetch");
        console.log("running fetch");
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        var player_name = " "
        // alert("Prop received: " + this.props.user)
        player_name = this.props.user.toString();

        player_name = player_name.toString();
        player_name = player_name.replace(' ', '+');
        player_name = player_name.replace('_', '+');
        // alert("The name: " + player_name);
        fetch(
            proxyurl +
            "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" +
            player_name
        )
            .then(res => res.text())
            .then(
                result => {
                    // alert("RESULT changing state");
                    if (this._isMounted) {
                        console.log("RESULT changing state");
                        this.setState({
                            isLoaded: true,
                            items: result
                        });
                    }
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                error => {
                    if (this._isMounted) {
                        // alert("ERROR changing state");
                        console.log("ERROR changing state");
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                }

            );

        const { error, isLoaded, items } = this.state;
        // console.log(items);
    }

    componentDidUpdate(prevProps) {
        console.log("update called");

        if (prevProps.user !== this.props.user) {
            // alert("running fetch");
            console.log("running fetch");
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            var player_name = " "
            // alert("Prop received: " + this.props.user)
            player_name = this.props.user.toString();

            player_name = player_name.toString();
            player_name = player_name.replace(' ', '+');
            player_name = player_name.replace('_', '+');
            // alert("The name: " + player_name);
            fetch(
                (proxyurl +
                    "https://secure.runescape.com/m=hiscore/index_lite.ws?player=" +
                    player_name)
            )
                .then(res => res.text())
                .then(
                    result => {

                        console.log("RESULT changing state");
                        this.setState({
                            isLoaded: true,
                            items: result
                        });

                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    error => {

                        console.log("ERROR changing state");
                        this.setState({
                            isLoaded: true,
                            error
                        });

                    }

                );
            const { error, isLoaded, items } = this.state;

        }

    }
    componentWillUnmount() {
        console.log("unmounted")
        this._isMounted = false;
    }



    render() {


        function organize_data(dict) {
            try {
                var temp_data_array = dict.split("\n");
                var individual_skill_array = temp_data_array[5].split(",");
              }
              catch (error) {
        
                var empty_activities = {}
                for (var i = 0; i < 28; i++) {
                  empty_activities[i] = " ";
                }
                console.log("empty stats");
                return empty_activities;
              }
            var data = {};
            //   xp, level, rank
            
            var temp_data_array = dict.split("\n");

            var individual_array = temp_data_array[0].split(",");
            for(var i=0; i<3; i++){
                individual_array[i] = parseInt(individual_array[i], 10);
                data[i] = individual_array[i];
            }






            return data;
        }
        var { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div><img src={require("../loading.gif")} alt="loading screen"/></div>;
        } else {
            var new_array = organize_data(items)
            return (
                
                    <div id="profile-info" className="grid-profile">
                        

                        <div className="grid-item-prof">
                            <p>Total Level:</p>
                        </div>
                        <div className="grid-item-prof">
                            <img src={require("../skillsIcon.png")} alt="Stats Symbol" /> {new_array[1].toLocaleString()}
                        </div>
                        <div className="grid-item-prof" id="smaller">
                            <small>Total XP:</small>
                        </div>
                        <div className="grid-item-prof">
                            {new_array[2].toLocaleString()}
                        </div>
                        <div className="grid-item-prof" id="smaller">
                            <small>Rank:</small>
                        </div>
                        <div className="grid-item-prof">
                            {new_array[2].toLocaleString()}
                        </div>
                    </div>
                
            );
        }
    }
}
