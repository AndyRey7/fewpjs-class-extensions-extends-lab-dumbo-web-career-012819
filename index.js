// Your code here

class Ploygon {
    constructor(sides) {
        this.sides = sides
        this.count = this.sides.length
    }

    get countSides() {
        this.sides.length
    }

    get perimeter() {
        let sum = 0;
        for (let side of this.sides) {
            sum += side
        }
        return sum
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.count === 3) {
            return [this.sides[0], this.sides[1], this.sides[2]]
        } else {
            null
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.count === 4) {
            return [this.sides[0], this.sides[1], this.sides[2], this.sides[3]]
        } else {
            null
        }
    }

    get area() {
        return this.sides[0] * this.sides[0]
    }
}
