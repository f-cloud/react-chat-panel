import React, { Component } from 'react';
import moment from 'moment';

import Message from '../../components/message/Message';
import MessageInput from '../../components/message-input/MessageInput';

import './chat-panel.css';

class ChatPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      typedMessage: ''
    }
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  onChange = e => {
    this.setState({ typedMessage: e.target.value });
    this.props.onTyping(e);
  }

  scrollToBottom() {
    this.refs.messages.scrollTop = this.refs.messages.scrollHeight;
  }

  sendMessage = () => {
    this.props.sendMessage(this.state.typedMessage);
    this.setState({ typedMessage: '' });
  }

  render() {
    return (
      <div id="chatPanel">
        <div className="top_menu">
          <div className="title">{this.props.title || 'Chat'}</div>
          {this.props.actions}
        </div>
        <ul className="messages" ref="messages">
          {this.props.messages.map((message, i) => (
            <Message key={i}
              timestamp={moment(message.timestamp).fromNow()}
              typed={message.typed}
              text={message.text}
              position={message.position}
            />
          ))}
        </ul>
        <MessageInput
          disabled={this.props.disableChat}
          onSend={this.sendMessage}
          onChange={this.onChange}
          isTyping={this.props.isTyping}
          typedMessage={this.state.typedMessage}
        />
      </div>
    );
  }
}

export default ChatPanel;