import BaseCat from "./baseCat.js";

/**
 * Cat object which extends base cat and overrides the label property
 */
class Cat extends BaseCat {
  constructor(label, args) {
    super(args);
    this.label = label;
  }
}

export default Cat;
