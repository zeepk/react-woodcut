import React, { Component } from 'react'
import FetchStats from "./fetch_stats";
import NameForm from "./NameForm";
export default class parent_fetcher extends Component {
    constructor(props){
        super(props);
    this.state = { user: 'zee pk' };
    this.render = this.render.bind(this);
    }



    render() {
        return (
            <div>
                <NameForm user={this.state.user} changeName={(user) => this.setState({user})}/>

                <h1>{this.state.user}</h1>
                
                <FetchStats user={this.state.user}/> 
            </div>
        )
    }
}


