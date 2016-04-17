
"use strict"
//what to do with reduce and the sample
// {
//     "max mattos": { 
//         {"name": "salmao", "price": 10, "quantity": 1}
//     }
// }
var fs = require('fs')  
let file = fs.readFileSync('./data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line =>  line.split('\t'))
	.reduce((customer, line) => {
		customer[line[0]] = customer[line[0]] || []
		customer[line[0]].push({
			name: line[1],
			price: line[2],
			quantity: line[3]
		})
	}, {})

console.log(file)