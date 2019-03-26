import React, { Component } from 'react';
import { observable, action } from "mobx";
import { observer } from "mobx-react";
class Counter extends Component {

    @observable count = 0;



    handleDec = () => {

    }

    render() {
        return (
            <div>
                <h1>Counter: {this.count}</h1>
                <button onClick={this.handleDec}>-</button>
                <button onClick={this.handleInc}>+</button>

            </div>
        )
    }
}

export default Counter;