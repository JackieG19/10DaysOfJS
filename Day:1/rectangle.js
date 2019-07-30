/* Calculating the area of a rectangle and returns the rectangle's area.*/

function getArea(length, width) {
    let area;
    area = length * width;
    return area;
}

/* Calculating the perimeter of a rectangle and returns the perimeter of a rectangle.*/

function getPerimeter(length, width) {
    let perimeter;
    var len = length + length;
    var wid = width + width;
    perimeter = len + wid;
    return perimeter;
}
