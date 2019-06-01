import React, { Component } from 'react'

var Parent = React.createClass({

    getInitialState: function() {
        return {
            value: 'foo'
        }
    },

    changeHandler: function(value) {
        this.setState({
            value: value
        });
    },

    render: function() {
        return (
            <div>
                <Child value={this.state.value} onChange={this.changeHandler} />
                <span>{this.state.value}</span>
            </div>
        );
    }
});

var Child = React.createClass({
    propTypes: {
        value:      React.PropTypes.string,
        onChange:   React.PropTypes.func
    },
    getDefaultProps: function() {
        return {
            value: ''
        };
    },
    changeHandler: function(e) {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(e.target.value);
        }
    },
    render: function() {
        return (
            <input type="text" value={this.props.value} onChange={this.changeHandler} />
        );
    }
});