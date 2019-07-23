import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

import Add from './Components/Add';
import List from './Components/List';

class App extends React.Component {

  state = {
    array: [
     // {id: '12345', value: "item 1", done: false},
      //{id: '14321', value: "item 2", done: true}
    ],
    input: ''
  }


  generateRandomString = (length) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  addTodo = (inputValue) => {
   // console.log('@@@@@@@@@@@@@@@@@@')
    let newArray = [...this.state.array]
    newArray.push({ id: this.generateRandomString(10), value: inputValue, done: false })

    this.setState({
      array: newArray
    })
  }

  readyTodo = (id) => {
    const { array } = this.state;
    let newArray = array;
    let index = newArray.findIndex(elem => elem.id == id);
    newArray[index].done ? newArray[index].done = false : newArray[index].done = true;
    this.setState({
      array: newArray
    })
  }

  editTodo = (id, newValue) => {
    const { array } = this.state
    let newArray = array;
    let index = newArray.findIndex(elem => elem.id == id);
    newArray[index].value = newValue;
    // alert('Это работает!', id);
    console.log('newValue', newValue)
    this.setState({
      array: newArray
    })
  }

  removeTodo = (id) => {
    const { array } = this.state;
    const newArray = array.filter(elem => elem.id !== id);
    this.setState({
      array: newArray

    })
  }

  mark = (doneAll) => {
    let newArray = [...this.state.array]
    newArray.forEach(function (item) {
      item.done = doneAll;
    })
    this.setState({
      array: newArray
    })
  }
  clearCompleted = () => {
    let newArray = [...this.state.array]
    newArray.forEach(function (item) {
      if (item.done === true)  newArray = newArray.filter(item => item.done !== true);
    })
    this.setState({
      array: newArray

    }) 
  }

  render() {
    console.log("render App")
    return (
      <div>
        <Add
          addFunc={this.addTodo}
          clearInput={this.state.input}
          array={this.state.array}
          mark={this.mark} />
        <List
          array={this.state.array}
          removeTask={this.removeTodo}
          readyTask={this.readyTodo}
          editTask={this.editTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    )
  }
}

export default App; 