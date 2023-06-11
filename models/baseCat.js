/**
 * Cat object with default attributes and overloaded constructor.
 */
class BaseCat {
  width = 400;
  height = 500;
  color = "Pink";
  size = 100;

  constructor({ width, height, color, size }) {
    if (width) this.width = width;
    if (height) this.height = height;
    if (color) this.color = color;
    if (size) this.size = size;
  }
}

export default BaseCat;
