import React, { Component } from 'react';
// import './App.css';



export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      doneAll: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleTodo = () => {
    if (((this.state.value).trim()).length > 0) {
      this.props.addFunc(this.state.value)
      this.setState({
        value : this.props.clearInput
      })
     
    }
  }

  handleKeyPress(e) {
    if (e.which === 13) {
      this.handleTodo();
    }
  }

  doneAll = () => {
    if (Array.length > 0) {
      this.props.mark(this.state.doneAll)
      this.state.doneAll ?
        this.setState({ doneAll: false }) : this.setState({ doneAll: true })
    }

  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <button onClick={this.doneAll}>V</button> <input type="text" id="new" value={this.state.value} onChange={this.handleChange} onKeyPress={e => this.handleKeyPress(e)}
          ref={el => this.inputTitle = el} autoComplete="off" placeholder="Что необходимо сделать?" />
        <button onClick={this.handleTodo}>+</button>
      </div>
    )
  }

}