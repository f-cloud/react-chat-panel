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
      timestamp = _ref.timestamp,
      typed = _ref.typed,
      style = _ref.style;

  if (position === 'info') return _react2.default.createElement(
    'li',
    { id: 'message', className: position },
    text
  );
  return _react2.default.createElement(
    'li',
    { id: 'message', className: position, style: style },
    _react2.default.createElement('div', { className: 'avatar' }),
    _react2.default.createElement(
      'div',
      { className: 'text_wrapper' },
      _react2.default.createElement(
        'span',
        { className: 'timestamp' },
        typed ? 'typing...' : timestamp
      ),
      _react2.default.createElement('div', { className: 'text', dangerouslySetInnerHTML: { __html: (0, _helpers.parseUrlInText)(text) } })
    )
  );
};

exports.default = Message;