class Point {
    // fields
    x: number;
    y: number;

    constructor(cx?: number, cy?: number) {
        this.x = cx;
        this.y = cy;
    }

    //methods
    draw() {
        // just logging for demo...
        console.log('X:', this.x, "Y:", this.y);
    }

    getDistance(another: Point) {
        // ...
    }
}

let point = new Point(13, 42);
// let point = new Point();
// point.x = 13;
// point.y = 42;
point.draw();
