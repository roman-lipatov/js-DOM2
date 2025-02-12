"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayImages = displayImages;
exports.updateImageSizes = updateImageSizes;

// gallery.js
function displayImages(images, gallery) {
  images.forEach(function (image) {
    var imgElement = document.createElement('img');
    imgElement.src = image.download_url;
    gallery.appendChild(imgElement);
  });
}

function updateImageSizes(gallery, imagesPerRow, minGap, maxGap) {
  var containerWidth = gallery.clientWidth;
  var gap = Math.min(Math.max(containerWidth * 0.03, minGap), maxGap);
  var totalGapWidth = gap * (imagesPerRow - 1);
  var imageWidth = (containerWidth - totalGapWidth) / imagesPerRow;
  var imgElements = gallery.getElementsByTagName('img');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = imgElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var img = _step.value;
      img.style.width = "".concat(imageWidth, "px");
      img.style.height = 'auto';
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  gallery.style.gap = "".concat(gap, "px");
}
//# sourceMappingURL=gallery.dev.js.map
