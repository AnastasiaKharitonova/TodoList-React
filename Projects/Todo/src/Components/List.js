import React, { Component } from 'react';
import Elem from './Element';
export default class List extends React.Component {

    state = {
        listState: 0, // 0 - All, 1 - Active, 2 - Completed
    }

    clearCompleted = () => {
        this.setState({
            filterArray: this.props.array

        })
        if (Array.length > 0) {
            this.props.clearCompleted();
            this.setState({
                filterArray: this.props.array

            })
        }
    }

    listAll = () => {
        console.log('listState', this.state.listState)
        this.setState({
            listState: 0
        })
    }

    listActive = () => {

        console.log('listState', 1)
        this.setState({
            listState: 1
        })
    }

    listCompleted = () => {
        console.log('listState', 2)
        this.setState({
            listState: 2
        })
    }

    render() {

        if (this.state.listState === 1) {
            console.log('if1');
            var filter = this.props.array.filter(item => item.done !== true)

        }
        else if (this.state.listState === 2) {
            console.log('if2');
            filter = this.props.array.filter(item => item.done == true)
        }
        else {
            console.log('if3');
            filter = this.props.array;
        }

        return (
            this.props.array.length !== 0 ?
                <div className="list" >
                    <ul>{filter.map((item, id) => {
                        return (
                            <Elem
                                item={item}
                                key={id}
                                removeTask={this.props.removeTask}
                                readyTask={this.props.readyTask}
                                editTask={this.props.editTask}
                            />)
                    })}</ul>

                    <div className="stylez">
                        {this.props.array.length} items left
                        <div>
                            <button className="btn btn-light" onClick={this.listAll}>All</button>
                            <button className="btn btn-light" onClick={this.listActive}>Active</button>
                            <button className="btn btn-light" onClick={this.listCompleted}>Completed</button>
                        </div>
                      
                            <button onClick={this.props.clearCompleted} className="btn btn-light"> Clear completed </button>
                       
                    </div>
                </div>

                : null
        );
    }
}