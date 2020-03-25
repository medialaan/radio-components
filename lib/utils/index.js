"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = on;
exports.isVisible = isVisible;
exports.urlFor = urlFor;
function on(event, selector, callback) {
  document.addEventListener(event, function (e) {
    var el = e.target.closest(selector);
    if (el) callback(e, el);
  });
}

function isVisible(elem) {
  return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
}
function urlFor(params) {
  var currentParams = Object.fromEntries(new URL(document.location).searchParams.entries());
  var queryParams = new URLSearchParams(Object.assign(currentParams, params)).toString();
  return window.location.pathname + "?" + queryParams;
}