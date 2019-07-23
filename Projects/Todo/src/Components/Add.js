import React, { Component } from 'react';
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

  handleKeyPress(e) {
    if (e.which === 13) {
      if (((this.state.value).trim()).length > 0) {
        this.props.addFunc(this.state.value)
        this.setState({
          value: this.props.clearInput
        })

      }
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
      <div className="input-group mb-0">
        <div className="input-group-prepend">
          <button onClick={this.doneAll} className="btn btn-outline-secondary" type="button"> <img src="https://png.pngtree.com/svg/20161117/b360928f8b.svg"
            width="15" /></button>
        </div>
        <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" id="new" value={this.state.value} onChange={this.handleChange} onKeyPress={e => this.handleKeyPress(e)}
          ref={el => this.inputTitle = el} autoComplete="off" placeholder="Что необходимо сделать?" />
      </div>

    )
  }

}