"use strict";

var _api = require("./api.js");

var _gallery = require("./gallery.js");

// main.js
var gallery = document.getElementById('gallery');
var currentPage = 1;
var imagesPerRow = 4;
var minGap = 3;
var maxGap = 15;

function loadImages() {
  var images;
  return regeneratorRuntime.async(function loadImages$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _api.fetchImages)(currentPage, imagesPerRow));

        case 2:
          images = _context.sent;
          (0, _gallery.displayImages)(images, gallery);
          (0, _gallery.updateImageSizes)(gallery, imagesPerRow, minGap, maxGap);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

loadImages(currentPage);
document.getElementById('loadMore').addEventListener('click', function _callee() {
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          currentPage++;
          _context2.next = 3;
          return regeneratorRuntime.awrap(loadImages());

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
});
document.getElementById('clearGallery').addEventListener('click', function () {
  gallery.innerHTML = '';
  currentPage = 1;
});
document.getElementById('removeLast').addEventListener('click', function () {
  var images = gallery.getElementsByTagName('img');

  if (images.length > 0) {
    gallery.removeChild(images[images.length - 1]);
    (0, _gallery.updateImageSizes)(gallery, imagesPerRow, minGap, maxGap);
  }
});
document.getElementById('reverseGallery').addEventListener('click', function () {
  var images = Array.from(gallery.getElementsByTagName('img'));
  gallery.innerHTML = '';
  images.reverse().forEach(function (img) {
    return gallery.appendChild(img);
  });
  (0, _gallery.updateImageSizes)(gallery, imagesPerRow, minGap, maxGap);
});
document.getElementById('shuffleGallery').addEventListener('click', function () {
  var images = Array.from(gallery.getElementsByTagName('img'));
  gallery.innerHTML = '';

  for (var i = images.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [images[j], images[i]];
    images[i] = _ref[0];
    images[j] = _ref[1];
  }

  images.forEach(function (img) {
    return gallery.appendChild(img);
  });
  (0, _gallery.updateImageSizes)(gallery, imagesPerRow, minGap, maxGap);
});
window.addEventListener('resize', function () {
  (0, _gallery.updateImageSizes)(gallery, imagesPerRow, minGap, maxGap);
});
//# sourceMappingURL=main.dev.js.map
