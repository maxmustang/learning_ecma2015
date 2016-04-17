"use strict"
var animals = [
    {name: 'Malu', species:'dog'},
    {name: 'Pacheco', species:'dog'},
    {name: 'Rodolfo', species:'cat'}
]

//differences between filter and map
//filter expect true or false indicating if the object should be return in the new array or not
//map will return all transformed objects that will be put in the array, in this case.. the names of the animals,
//  could be any transformed object like a dog object with a method for example

let getNames = (animal) =>  animal.name 
let animalsNames = animals.map(getNames)
console.log("============> ",animalsNames )

//however, map give the oportunity to create an array with new objects we can return a new object to this arrays

let newAnimalsObjects = animals.map((animal) => animal.name + 'is a ' + animal.species)
console.log(`----------------------`,newAnimalsObjects)
