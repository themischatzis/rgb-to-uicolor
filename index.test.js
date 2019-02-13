const { rgbToUIColor } = require('./index');

describe("rgbToUIColor", function() {
  it('should convert a rgb color to an UIColor', function() {
    const rgbColor = {
      r: 23,
      g: 43,
      b: 76
    };

    const result = rgbToUIColor(rgbColor);

    expect(result).toEqual({
      r: "0.09",
      g: "0.17",
      b: "0.30"
    })
  });
});
