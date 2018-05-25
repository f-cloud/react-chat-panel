"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var urlRe = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

var isUrl = exports.isUrl = function isUrl(value) {
  return urlRe.test(value);
};

var parseUrlInText = exports.parseUrlInText = function parseUrlInText(text) {
  return text.replace(urlRe, function (url) {
    return "<a href='" + (/^https?/.test(url) ? url : "//" + url) + "' target='_blank'>" + url + "</a>";
  });
};