var Point = /** @class */ (function () {
    function Point() {
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
var point = new Point;
point.x = 13;
point.y = 42;
point.draw();
