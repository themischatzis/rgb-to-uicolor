class RGBtoUIColor {
  constructor(rgbColor) {
    this.state = {
      rgbColor: {}
    }
    this.rgbColor = rgbColor;
    this.rgbToUIColor = this.rgbToUIColor.bind(this);


  }
  
  convertToObjectiveC(rgbColor) {
    this.rgbToUIColor(rgbColor)
    return `[UIColor colorWithRed:${this.formatNumber(this.rgbColor.r)} green:${this.formatNumber(this.rgbColor.g)} blue:${this.formatNumber(this.rgbColor.b)} alpha:1.0];`
    ;
  }

  convertToSwift() {
    this.rgbToUIColor(rgbColor)
    return `UIColor(red:${this.rgbColor.r}, green:${this.rgbColor.g}, blue:${this.rgbColor.b}, alpha:1.0)`
    ;
  }

  convertToXamarin() {
    this.rgbToUIColor(rgbColor)
    return `new UIColor(red:${this.rgbColor.r}f, green:${this.rgbColor.g}f, blue:${this.rgbColor.b}f, alpha:1.0)`
    ;
  }

  formatNumber(value) {
    return (value / 255).toFixed(2);
  }
  

  rgbToUIColor(rgbColor) {

    if (typeof this.rgbColor === 'string' || this.rgbColor instanceof String) {
      throw new Error('RGB color should not be a string.');
    }
  
    if (!this.rgbColor.r || !this.rgbColor.g || !this.rgbColor.b) {
      
      throw new Error('RGB color is missing either r or g or b.');
    }
  
    return {
      r: this.formatNumber(this.rgbColor.r),
      g: this.formatNumber(this.rgbColor.g),
      b: this.formatNumber(this.rgbColor.b),
    };
  }
}

module.exports = RGBtoUIColor;

