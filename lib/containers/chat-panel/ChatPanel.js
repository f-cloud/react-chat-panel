'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Message = require('../../components/message/Message');

var _Message2 = _interopRequireDefault(_Message);

var _MessageInput = require('../../components/message-input/MessageInput');

var _MessageInput2 = _interopRequireDefault(_MessageInput);

require('./chat-panel.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatPanel = function (_Component) {
  _inherits(ChatPanel, _Component);

  function ChatPanel(props) {
    _classCallCheck(this, ChatPanel);

    var _this = _possibleConstructorReturn(this, (ChatPanel.__proto__ || Object.getPrototypeOf(ChatPanel)).call(this, props));

    _this.onChange = function (e) {
      return _this.setState({ typedMessage: e.target.value });
    };

    _this.sendMessage = function () {
      _this.props.sendMessage(_this.state.typedMessage);
      _this.setState({ typedMessage: '' });
    };

    _this.state = {
      typedMessage: ''
    };
    return _this;
  }

  _createClass(ChatPanel, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.scrollToBottom();
    }
  }, {
    key: 'scrollToBottom',
    value: function scrollToBottom() {
      this.refs.messages.scrollTop = this.refs.messages.scrollHeight;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'chatPanel' },
        _react2.default.createElement(
          'div',
          { className: 'top_menu' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            this.props.title || 'Chat'
          ),
          this.props.actions
        ),
        _react2.default.createElement(
          'ul',
          { className: 'messages', ref: 'messages' },
          this.props.messages.map(function (message, i) {
            return _react2.default.createElement(_Message2.default, { key: i,
              timestamp: (0, _moment2.default)(message.timestamp).fromNow(),
              text: message.text,
              position: message.position });
          })
        ),
        _react2.default.createElement(_MessageInput2.default, {
          disabled: this.props.disableChat,
          onSend: this.sendMessage,
          onChange: this.onChange,
          typedMessage: this.state.typedMessage
        })
      );
    }
  }]);

  return ChatPanel;
}(_react.Component);

exports.default = ChatPanel;