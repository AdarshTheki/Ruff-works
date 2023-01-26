/*  
    JavaScript :- Basic

    Variables:-
var = most widely used(reassigned) avoid this.
let = can be decleard block of code{} reassigned otherwise can't  be ressinged 
const = cannot be reassigned

    7-Primitive Datatype:- (nn bb ss u)
number,     let id = 20
null,       let id = null
boolean,    let id = true
bigint,     let id = BigInt("549") + BigInt("4")    // 553n
symbol,     let id = Symbol("Adarsh verma")         // Symbol(Adarsh verma)
string,     let id = "two"
any,        let id = undefined
*/

console.log("the world is my first programmig Language")

let x = 22
x = 24              // let x = 24 not redefined but value change 
var y = 67      
var y = 60          // redefine & value changed
const z = 'Adarsh'  // not change any 
console.log(x, y, z)

let a = null;
let b = 345;
let c = true;
let d = BigInt("549") + BigInt("4")
let e = 'Harry'
let f = Symbol("I am a Adarsh Verma")
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof a, typeof b,  typeof c,  typeof d,  typeof e, typeof f,  typeof g)

// This is Object in JavaScript. (not Dictionary)
const item = {
    'harry':'verma',
    'adarsh':false,
    'lovish':67,
    'rohan':undefined
}
item['harry'] = 45          
item['friends'] = 'ayush'

console.log(item['harry'])  // 45
console.log(item.harry)     // 45
console.log(item.friends)   // ayush
console.log(item.ravi)      // undefined



