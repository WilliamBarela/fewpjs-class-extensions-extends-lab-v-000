// Your code here

class Polygon {
  constructor(sides){
    this._sides = sides;
  }
  
  get countSides(){
    return this._sides.length;
  }
  
  get perimeter(){
    this._perimeter = this._sides.reduce((s, sum) => sum + s, 0);
  }
}