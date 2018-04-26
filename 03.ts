class Point {
    // fields
    x: number;
    y: number;

    //methods
    draw() {
        // just logging for demo...
        console.log('X:', this.x, "Y:", this.y);
    }

    getDistance(another: Point) {
        // ...
    }
}

const point = new Point;
point.x = 13;
point.y = 42;
point.draw();
