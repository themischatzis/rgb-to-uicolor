function formatNumber(value) {
  return (value / 255).toFixed(2);
}

var rgbToUIColor = function (rgbColor) {
  if (typeof rgbColor === 'string' || rgbColor instanceof String) {
    throw new Error('RGB color should not be a string.');
  }

  if (!rgbColor.r || !rgbColor.g || !rgbColor.b) {
    throw new Error('RGB color is missing either r or g or b.');
  }

  return {
    r: formatNumber(rgbColor.r),
    g: formatNumber(rgbColor.g),
    b: formatNumber(rgbColor.b),
  };
}

module.exports = {
  rgbToUIColor: rgbToUIColor
};

