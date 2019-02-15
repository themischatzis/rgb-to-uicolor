const  RGBtoUIColor  = require('./index');

describe("RGBtoUIColor", function() {
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

  it('should fail when r is not defined', function() {
    const rgbColor = {
      g: 43,
      b: 76
    };

    expect(() => rgbToUIColor(rgbColor)).toThrowError("RGB color is missing either r or g or b.")
  });

  it('should fail when passing a string', function() {
    const rgbColor = "test";

    expect(() => rgbToUIColor(rgbColor)).toThrowError("RGB color should not be a string.")
  });

  fit('should convert a rgb color to an UIColor', function() {
    const rgbColor = {
      r: 23,
      g: 43,
      b: 76
    };

    const result = new RGBtoUIColor(rgbColor);

    expect(result.convertToObjectiveC()).toEqual(`[UIColor colorWithRed:0.09 green:0.17 blue:0.30 alpha:1.0];`)
  });
});
