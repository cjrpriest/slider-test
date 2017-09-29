import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from 'react-md/lib/Buttons/Button';
import Slider from 'react-md/lib/Sliders';

export default class App extends Component {
    state = {
        value: 0
    };

    onChange = (newValue) => {
        this.setState({value: newValue})
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <Button flat onClick={() => {
                    this.setState((prevState) => {
                        return {value: prevState.value + 1}
                    })
                }}>Increment</Button>
                <Slider
                    id="slider"
                    onChange={this.onChange}
                    value={this.state.value}>
                </Slider>
            </div>
        );
    }
}
