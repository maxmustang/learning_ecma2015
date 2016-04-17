var animals = [
    {name: 'Malu', species:'dog'},
    {name: 'Pacheco', species:'dog'},
    {name: 'Rodolfo', species:'cat'}
]

// in functional programming, functions are value, so.. a anonymous function can and shall be assing to a value 
// let x = function(a){..}

// functions that receive another functions as arguments are called high-order functions
// a function that is a argument is knowed as callback function
// a high-order function and a callback function compose each other


// a high-order function 'filter' compose with a callback function to verifify if a animal is a dog or not
// and return a new animals array composed only by dogs

//ecma6 example of how to call functions
var dogs = animals.filter(animal => animal.species === 'dog');

console.log("-------------", dogs)

// var isDog = function(animal){
//     return animal.species === 'dog'
// }
// var dogs = animals.filter(isDog)

// console.log(dogs)
// reject is a another high-order function from array that receive a item e do the oposite of filter
// reject is not originaly from js.. I can find it in underscore for example
// var anotherAnimals = animals.reject(isDog)
// should have only cats in anotherAnimals
// console.log(anotherAnimals)