let marks = [91,21,45,false,'not present']
console.log(marks)          // [ 91, 21, 45, false, 'not present' ]
console.log(typeof marks)   // object

let a = marks.toString()
console.log(a)              // a is now all string

let b = marks.join(" - ")
console.log(b)              // 91 - 21 - 45 - false - not present

let c = marks.pop()
console.log(marks,c)        // [ 91, 21, 45, false ] not present

let d = marks.push(56)
console.log(marks,d)        // [ 91, 21, 45, false, 56 ] 5

let e = marks.shift()       
console.log(marks,e)        // [ 21, 45, false, 56 ] 91


