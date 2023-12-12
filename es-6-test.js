

let colors = ['red', 'green', "blue"]
let code = [1, 2,3]

const address = {
    street: 'lalgutwa',
    city: 'ranchi',
    country: "india",
};

//Array map() -  used to render list in react
const map1 = colors.map(function (color) {
    return '<li>'+color+'</li>' 
})
 console.log(map1)

//template literals


const {street, city, country} = address
//object destructuring
//console.log(address)

//spread operator
//console.log(...colors, ...code)



