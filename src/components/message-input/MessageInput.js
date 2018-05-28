import React from 'react';

import './message-input.css';

const MessageInput = ({ typedMessage, onChange, onSend, disabled }) => {
  return (
    <div className="clearfix" id="bottomWrapper">
      <div className={`message_input_wrapper ${disabled ? 'disabled' : ''}`}>
        <input
          value={typedMessage}
          onChange={onChange}
          className="message_input"
          placeholder="Type your message here..."
          disabled={disabled}
          onKeyPress={e => {
            if (e.key === 'Enter') onSend();
          }}
        />
      </div>
      <button
        className="send_message text"
        onClick={onSend}
        disabled={disabled}
      >Send</button>
      <div className="typing">Typing...</div>
    </div>
  );
};

export default MessageInput;