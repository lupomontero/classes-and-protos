// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// console.log(p1.distance); // undefined
// console.log(p2.distance); // undefined
// console.log(Point.distance(p1, p2)); // 7.0710678118654755
