/**
 * The reduce() method applies a function against an accumulator and each value of the typed array (from left-to-right) has to reduce it to a single value
 * 
 * SINTAXE
 * 
 * const uint8 = new Uint8Array([0, 1, 2, 3]);
 * function sum(previousValue, currentValue) {
 *      return previousValue + currentValue;
 * }
 * 
 * console.log(uint8.reduce(sum)); // expected output: 6
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
 */

var arr = [1,2,3,4,5].reduce((total, item)=>{return total+item}, 0); //The 0 is initial value

console.log(arr);