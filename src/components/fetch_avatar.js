import React, { Component } from 'react'

export default class fetch_avatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

      componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const player_name = "zee+pk";
        fetch(
          proxyurl +
            "https://secure.runescape.com/m=hiscore/index_lite.ws?player=" +
            player_name
        )
          .then(res => res.text())
          .then(
            result => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            error => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
        const { error, isLoaded, items } = this.state;
        console.log(items);
      }

    render() {
        const { error, isLoaded, items } = this.state;
        return (
            <div>
                {items}
            </div>
        )
    }
}
