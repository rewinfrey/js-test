class Foo {
  static one(a) { return a; };
  two(b) { return b; }
  three(c) { return c; }
}

class Foo extends require('another-class') {
  constructor() {
    super()
  }
}