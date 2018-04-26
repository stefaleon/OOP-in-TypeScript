var Point = /** @class */ (function () {
    function Point(cx, cy) {
        this.x = cx;
        this.y = cy;
    }
    //methods
    Point.prototype.draw = function () {
        // just logging for demo...
        console.log('X:', this.x, "Y:", this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
var point = new Point(13, 42);
// let point = new Point();
// point.x = 13;
// point.y = 42;
point.draw();
