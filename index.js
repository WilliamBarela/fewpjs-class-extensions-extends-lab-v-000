// Your code here

class Polygon {
  constructor(sides){
    this._sides = sides;
  }
  
  get countSides(){
    return this._sides.length;
  }
  
  get perimeter(){
    return this._sides.reduce((s, sum) => sum + s);
  }
}

class Triangle extends Polygon {
}

class Square extends Polygon {
}