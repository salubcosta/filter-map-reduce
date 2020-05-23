/**
 * The map() method creates a new typed array with the results of calling a provided function on every element in this typed array
 * 
 * SINTAXE
 * 
 * const uint8 = new Uint8Array([25, 36, 49]);
 * const roots = uint8.map(Math.sqrt);
 * 
 * console.log(roots); // expected output: Uint8Array [5, 6, 7]
 * 
 * Reference: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map
 */

var arr = [1,2,3,4,5].map(item => item*2);

console.log(arr);