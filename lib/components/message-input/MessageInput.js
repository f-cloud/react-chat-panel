'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./message-input.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageInput = function MessageInput(_ref) {
  var typedMessage = _ref.typedMessage,
      onChange = _ref.onChange,
      onSend = _ref.onSend,
      disabled = _ref.disabled,
      isTyping = _ref.isTyping;

  return _react2.default.createElement(
    'div',
    { className: 'clearfix', id: 'bottomWrapper' },
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