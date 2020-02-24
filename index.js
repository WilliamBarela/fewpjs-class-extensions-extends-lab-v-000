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
  get isValid(){
    const s = this._sides;
    const AB = ;
    const BC = ;
    const CA = ;
    const [A,B,C] = 
    return (this.countSides === 3 && )
  }
}

class Square extends Polygon {
}