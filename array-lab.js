let fruits = ['apple','mangoes', 'jackfruit']

for(const fruit of fruits){
	//console.log(fruit)
}

function isLong(fruit){
	return fruit.length > 5; 
}

const longer = fruits.filter(isLong);
console.log(longer+" fruit names longer than 5 char");

// join()-  need parameter as delimter 
const str1 = fruits.join(" ")
//console.log(str1)

// toString() doesn't need any parameter
const str2 = fruits.toString()
//console.log(str2)

const arr1 = [1,4,8,16]

const map1 = arr1.map((x)=> x*2);
console.log(map1);
// dot vs bracket notation 
/*The main factor that will help you make your decision is the key of the property you want to access. 
If it is a static key, use Dot Notation. But if it is a dynamic key (evaluated from an expression during 
runtime), use Bracket Notation.
Dot Notation is useful when you know the property ahead of time. You simply do object.key to read/modify
 an existing property or to add a new property.
Bracket Notation is useful when you want to dynamically access a property. 
The key of this property could come from expressions like getKey(), "my" + "key", or keyVariable.*/

//associative array - uses key that can be of any data type

let person = {
	name: "chandan",
  age: 33,
  address: {
  	street: "312 near bachpan school lalgutwa",
    city: "Ranchi",
    pincode: 835303
  }
}

console.log(person.name)
console.log(person.address.pincode)

// don't forget double quote inside bracket
console.log(person.address["city"]);

person.location = "northern hemisphere"
console.log(person)

const myLoc = "location"
console.log(person.myLoc);//undefined // dynamic key not accepted by dot notation
/* Bracket Notation, on the other hand, allows dynamic keys. Because this notation 
accepts expressions, you can use any expression that evaluates to a value.*/
//bracket notation
console.log(person[myLoc])