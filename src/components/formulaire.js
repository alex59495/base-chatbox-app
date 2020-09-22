import React, { Component } from 'react';

class Formulaire extends Component {
  state = {
    message: "",
    length: this.props.length,
  }

  createMessage = () => {
    const { addMessage, pseudo, length } = this.props
    const message = {
      pseudo,
      message: this.state.message
    }
    addMessage(message)
    this.setState({ message: "", length })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.createMessage();
  }

  handleChange = (event) => {
    const content = event.target.value;
    const length = this.props.length - content.length
    this.setState({message: content, length})
  }

  handleKeyUp = (event) => {
    if (event.key === "Enter") {
      this.createMessage();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <textarea 
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          value={this.state.message}
          required 
          maxLength={this.state.length}
        />
        <div className="infos">
          {this.state.length}
        </div>
        <button type='submit'>
          Envoyer !
        </button>
      </form>
    );
  }
}

export default Formulaire;