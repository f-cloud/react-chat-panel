'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../../utils/helpers');

require('./message.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(_ref) {
  var text = _ref.text,
      position = _ref.position,
      timestamp = _ref.timestamp;

  if (position === 'info') return _react2.default.createElement(
    'li',
    { id: 'message', className: position },
    text
  );
  return _react2.default.createElement(
    'li',
    { id: 'message', className: position },
    _react2.default.createElement('div', { className: 'avatar' }),
    _react2.default.createElement(
      'div',
      { className: 'text_wrapper' },
      _react2.default.createElement(
        'span',
        { className: 'timestamp' },
        timestamp
      ),
      _react2.default.createElement(
        'div',
        { className: 'text' },
        (0, _helpers.isUrl)(text) ? _react2.default.createElement(
          'a',
          { href: /^https?/.test(text) ? text : '//' + text, target: '_blank' },
          text
        ) : text
      )
    )
  );
};

exports.default = Message;