import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

export default class Elem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
    }

    removeTask = () => {
        this.props.removeTask(this.props.item.id);
    }

    readyTask = () => {
        this.props.readyTask(this.props.item.id);
    }

    editTask = () => {
        this.props.editTask(this.props.item.id);
    }

    render() {
        console.log('render element');
        return (
            <li key={this.props.item.id} >

                <input type="checkbox" onClick={this.readyTask} checked={this.props.item.done} />
                <span onDoubleClick={this.editTask}>
                    {this.props.item.value}
                </span>
                <button onClick={this.removeTask}>x</button>


            </li>);

    }

}