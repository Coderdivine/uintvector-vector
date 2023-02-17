const Vector = require("../Vector");
console.log("----------Calculating Vector----------");
console.log("---------")
console.log("-------")
console.log("------")
console.log("----")

const vector = new Vector();
console.log(vector.singleVector(100,30))
console.log(vector.MultipleVector([100,30,10],[0,12,30]))
console.log(vector.UnitVector(1,2));
console.log(vector.Magnitude(1,2));
console.log(vector.Differences(1,2,"N","E"))
console.log(vector.dotProduct(1,2,3,4));