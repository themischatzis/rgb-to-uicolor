function formatNumber(value) {
  return (value / 255).toFixed(2);
}

var rgbToUIColor = function (rgbColor) {

  return {
    r: formatNumber(rgbColor.r),
    g: formatNumber(rgbColor.g),
    b: formatNumber(rgbColor.b),
  };
}

module.exports = {
  rgbToUIColor: rgbToUIColor
};

