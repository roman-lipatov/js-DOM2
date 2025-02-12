"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _api = require("./modules/api.js");

var _gallery = require("./modules/gallery.js");

var _events = require("./modules/events.js");

function init() {
  var images;
  return regeneratorRuntime.async(function init$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _api.fetchImages)(1));

        case 2:
          images = _context.sent;
          (0, _gallery.displayImages)(images);
          (0, _events.initializeEventListeners)();

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=script.dev.js.map
