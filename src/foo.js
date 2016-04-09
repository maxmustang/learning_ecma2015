import "babel-polyfill";
class Foo {
  method() {}
  addAll() {
    return Array.from(arguments).reduce((a, b) => a + b);
    }
}