import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(){
        super()

        this.state ={
            message: "Hello"
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message: "Good Bye"
        })
        console.log(this);
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick = {this.clickHandler.bind(this)}>click</button> */}
                {/* <button onClick = {() => this.clickHandler()}>click</button> */}
                <button onClick = {this.clickHandler}>click</button>
            </div>
        )
    }
}

export default EventBind
