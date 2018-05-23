"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isUrl = exports.isUrl = function isUrl(value) {
  var re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  return re.test(value);
};