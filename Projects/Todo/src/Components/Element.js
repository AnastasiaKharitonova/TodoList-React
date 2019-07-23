import React, { Component } from 'react';
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

        return (


            <li key={this.props.item.id} className="list-group-item" >

                <input type="checkbox" onChange={this.readyTask} checked={this.props.item.done} />
                {!this.state.edit ?
                    <span  onDoubleClick={this.editMode}>
                        {this.props.item.value}
                    </span>
                    : <input autoFocus={true} type='text' onChange={this.handleInputChange} value={this.props.item.value} onBlur={this.editMode} />
                }
                <div className="button">
                    <button onClick={this.removeTask} width="15"  >x</button>
                </div>
            </li>);
    }
}