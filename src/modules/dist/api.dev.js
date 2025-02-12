"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchImages = fetchImages;

// api.js
function fetchImages(page, imagesPerRow) {
  var response, images;
  return regeneratorRuntime.async(function fetchImages$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://picsum.photos/v2/list?page=".concat(page, "&limit=").concat(imagesPerRow * 1)));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          images = _context.sent;
          return _context.abrupt("return", images);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}
//# sourceMappingURL=api.dev.js.map
