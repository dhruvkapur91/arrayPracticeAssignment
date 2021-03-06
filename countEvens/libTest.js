let assertEq = require('assert').deepEqual;
let {countEvens}  = require('./lib.js');

const testCountEvens = function(input,expected,func){
  let actual = func(input);
    console.log("For input :", input);
  console.log("expected :", expected);
  console.log("actual :", actual);
  console.log("------------");
  assertEq(expected, actual);

}
//test with zero :
input = [0];
testCountEvens(input, 1, countEvens);

//test with one odd :
input = [1];
testCountEvens(input, 0, countEvens);

//test with one even :
input = [2];
testCountEvens(input, 1, countEvens);

//test with negetive odd :
input = [-1];
testCountEvens(input, 0, countEvens);

//test with negetive even :
input = [-2];
testCountEvens(input, 1, countEvens);

//test with two evens :
input = [-2, 2];
testCountEvens( input, 2, countEvens);
 
//test with multiple numbers : 
input = [1,2,3,4,5,6,0,-1,-2,-3,-4,-5,-6]
testCountEvens( input, 7, countEvens);
