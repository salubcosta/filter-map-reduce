/**
 * O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
 * 
 * SINTAXE 
 * 
 * function isBigEnough(value) {
 *      return value >= 10;
 * }
 * var filtered = [12, 5, 8, 130, 44].filter(isBigEnough); // filtered is [12, 130, 44]
 * 
 * Reference: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro
 */

const animals = [
    {
        name: 'Bruce',
        type: 'Cat',
        age: 5
    },
    {
        name: 'Nemo',
        type: 'Fish',
        age: 1
    },
    {
        name: 'Hulk',
        type: 'Dog',
        age: 6
    }
];

//Example 01: Using a function as callback
/*const fn = (value)=>{
   return value < 5;
}
const pets = animals.filter(({age})=>fn(age));*/

//Example 02: Using {} to extract keys of the array/object
/*const pets = animals.filter(({age})=>age<5);*/

//Example 03: Traditional use
const pets = animals.filter(item => item.age < 5);

console.log(pets);
