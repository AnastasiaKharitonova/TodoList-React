import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

export default class Elem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            edit: false
        }
    }



    removeTask = () => {
        this.props.removeTask(this.props.item.id);
    }

    readyTask = () => {
        this.props.readyTask(this.props.item.id);
    }

    editMode = () => {
        this.setState({ edit: !this.state.edit })
    }
   

    handleInputChange = (e) => {
        const { value } = e.target;
        this.props.editTask(this.props.item.id, value)
    }

    render() {

       // console.log('111111111111111111111111111111', this.props.item);
        return (

            <li key={this.props.item.id} >

                <input type="checkbox" onChange={this.readyTask} checked={this.props.item.done} />
                {!this.state.edit ?
                    <span className="span" onDoubleClick={this.editMode}>
                        {this.props.item.value}
                    </span>
                    : <input autoFocus={true} type='text' onChange={this.handleInputChange} value={this.props.item.value} onBlur={this.editMode} />
                }
                <button onClick={this.removeTask} >x</button>
            </li>);

    }

}