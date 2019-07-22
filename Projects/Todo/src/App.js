import React from 'react';
import logo from './logo.svg';
import './App.css';
import Add from './Components/Add';
import List from './Components/List';

class App extends React.Component {

  state = {
    array: [],
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
    console.log('@@@@@@@@@@@@@@@@@@')
    //console.log(inputValue);
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
    const { array } = this.state;
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

  render() {
    console.log('#############this.state.array', this.state)
    return (
      <div>
        <Add
          addFunc={this.addTodo}
          clearInput={this.state.input} />
        <List
          array={this.state.array}
          removeTask={this.removeTodo}
          readyTask={this.readyTodo}
          editTask={this.editTodo}
        />
      </div>
    )
  }
}

export default App; 