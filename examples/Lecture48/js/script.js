// Function constructors
function Circle (radius) {
  this.radius = radius; // 'this' was pointing to the global object. When we say 'new', this is pointing instead to the object that 'this' is created, which in this case, is Circle.
}

Circle.prototype.getArea = 
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  };


var myCircle = new Circle(10); // new Object();
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);




