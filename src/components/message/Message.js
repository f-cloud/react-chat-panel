import React from 'react';

import { parseUrlInText } from '../../utils/helpers';

import './message.css';

const Message = ({ text, position, timestamp }) => {
  if (position === 'info') return (
    <li id="message" className={position}>
      {text}
    </li>
  );
  return (
    <li id="message" className={position}>
      <div className="avatar"></div>
      <div className="text_wrapper">
        <span className="timestamp">{timestamp}</span>
        <div className="text" dangerouslySetInnerHTML={{__html: parseUrlInText(text)}} />
      </div>
    </li>
  );
};

export default Message;