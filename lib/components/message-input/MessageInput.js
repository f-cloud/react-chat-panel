'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./message-input.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageInput = function MessageInput(props) {
  var typedMessage = props.typedMessage,
      onChange = props.onChange,
      onSend = props.onSend,
      disabled = props.disabled,
      isTyping = props.isTyping;


  return _react2.default.createElement(
    'div',
    {
      className: 'clearfix',
      id: 'bottomWrapper',
      style: {
        backgroundColor: props.themeColor
      } },
    _react2.default.createElement(
      'div',
      { className: 'message_input_wrapper ' + (disabled ? 'disabled' : '') },
      _react2.default.createElement('input', {
        value: typedMessage,
        onChange: onChange,
        className: 'message_input',
        placeholder: 'Type your message here...',
        disabled: disabled,
        onKeyPress: function onKeyPress(e) {
          if (e.key === 'Enter') onSend();
        }
      })
    ),
    _react2.default.createElement(
      'button',
      {
        className: 'send_message text',
        onClick: onSend,
        disabled: disabled
      },
      'Send'
    ),
    isTyping && _react2.default.createElement(
      'div',
      { className: 'typing' },
      'Typing...'
    )
  );
};

exports.default = MessageInput;