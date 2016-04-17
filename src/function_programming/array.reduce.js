"use strict"
//map will transform an array in new array with the same length, but, with each indivial transformed
//filter transforms an array in smaller array based in a condition
//reject the same think as array
//find only returns the first item :D

//reduce is for the case that you cant find one that fi

var orders = [
    {amount: 100},
    {amount: 300},
    {amount: 400},
    {amount: 500}
]

// sum amounts with reduce should be 1300 :D
                                                                              //initial value {sum variable}
let totalAmount = orders.reduce((sum, order) => { 
    console.log("------------ hello", sum, order)
    return sum + order.amount 
}, 0)

console.log(totalAmount)