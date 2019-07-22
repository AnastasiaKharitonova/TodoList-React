import React, { Component } from 'react';
// import './App.css';
import Elem from './Element';


export default class List extends React.Component {

    render() {
        let items = this.props.array.map((item, id) => {
            return (<Elem
                item={item}
                key={id}
                removeTask={this.props.removeTask}
                readyTask={this.props.readyTask}
                editTask={this.props.editTask}
            />)
        });

        console.log(this.props.array);

        return (
            <div>
                <p>Всего заданий: {this.props.array.length}</p>
                <ul>{items}</ul>
            </div>
        );
    }
}