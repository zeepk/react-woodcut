import React, { Component } from 'react'
import FetchStats from "./fetch_stats";
import NameForm from "./NameForm";
export default class parent_fetcher extends Component {
    constructor(props){
        super(props);
    this.state = { user: 'zee pk' }
    }

    // handleLanguage = (userValue) => {
    //     this.setState({user: userValue});
    //     alert("Parent fether received: " + userValue)
    //     // return this.state.user;
    // }
    // changeHandler = (dataFromChild) => {
    //     alert("Parent received: " + dataFromChild)
    //     // var a_name = dataFromChild;
    //     if (dataFromChild){
    //         this.setState({user: dataFromChild}) 
    //     }
    //     else{
    //         this.setState({user: "zee pk"}) 
    //     }
    // }


    render() {
        return (
            <div>
                <NameForm user={this.state.user} changeName={(user) => this.setState({user})}/>

                {/* <h1>{this.state.user}</h1> */}
                <FetchStats user={this.state.user}/> 
            </div>
        )
    }
}


