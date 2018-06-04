import React from 'react';

import { parseUrlInText } from '../../utils/helpers';

import './message.css';

const Message = ({ text, position, timestamp, typed, style }) => {
  if (position === 'info') return (
    <li id="message" className={position}>
      {text}
    </li>
  );
  return (
    <li id="message" className={position} style={style}>
      <div className="avatar"></div>
      <div className="text_wrapper">
        <span className="timestamp">{ typed ? 'typing...' : timestamp}</span>
        <div className="text" dangerouslySetInnerHTML={{__html: parseUrlInText(text)}} />
      </div>
    </li>
  );
};

export default Message;