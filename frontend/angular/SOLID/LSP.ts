class Shape {
    calculateArea(): number {
        return 0;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}


function printArea(shape: Shape): void {
    const area = shape.calculateArea();
    console.log(`The area of the shape is: ${area}`);
}

const rectangle = new Rectangle(4, 5);
printArea(rectangle); // Output: The area of the shape is: 20

const circle = new Circle(3);
printArea(circle); // Output: The area of the shape is: 28.274333882308138