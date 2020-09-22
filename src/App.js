import React, { Component, createRef } from 'react'
import './App.css'
import './transition.css'
import Formulaire from './components/formulaire'
import Message from './components/message'

// Firebase
import base from './base'

// Transitions
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  refMessage = createRef()

  componentDidMount() {
    base.syncState('/', {
      context: this,
      state: 'messages',
    })
  }

  componentDidUpdate() {
    const ref = this.refMessage.current
    ref.scrollTop = ref.scrollHeight
  }
  

  addMessage = (message) => {
    const messages = this.state.messages;
    messages[`message-${Date.now()}`] = message
    Object
    .keys(messages)
    .slice(0, -10)
    .forEach((key) => {
      messages[key] = null;
    })
    this.setState({ messages })
  }
  
  isUser = (pseudo) => {
    return(pseudo === this.state.pseudo)
  }
  
  render () {
    const messages = Object
    .keys(this.state.messages)
    .map((key) => {
      return(
        <CSSTransition
          classNames="fade"
          timeout={2000}
          key={key}
        >
          <Message
            isUser = {this.isUser}
            pseudo={this.state.messages[key].pseudo}
            message={this.state.messages[key].message}
          />
        </CSSTransition>
        )
      })

    return (
      <div className='box'>
        <div className="messages" ref={this.refMessage}>
          <TransitionGroup className="message">
            {messages}
          </TransitionGroup>
        </div>
        <Formulaire length="150" addMessage={this.addMessage} pseudo={this.props.match.params.pseudo}/>
      </div>
    )
  }
}

export default App
