// This file will be deleted when I am working on the exercise Questions

// ---------------------- 1.Variables ---------------------- //
const x = 8
let y = 6

console.log(x, y)
y += 10
console.log(x, y)
y = 'daldghfa,rlsk,ghv,ldfkm'
console.log(x, y)
// x = 4



console.log("")
console.log("")



// ---------------------- 2.Arrays ---------------------- //
const myArray = [1, -1, 3, 4]
console.log(myArray.length)
myArray.push(5)
console.log(myArray.length)
console.log(myArray[1])

myArray.forEach(value => {
  console.log(value)
})

const myArray2 = myArray.concat(9, 10, 15, 2)

console.log(myArray)
console.log(myArray2)

const myArray3 = [6, -2, 789097]

const myMapedArray = myArray3.map(value => value * 2)
console.log(myMapedArray)

const myMapedArray2 = myArray3.map(value => '<li>' + value + '</li>')
console.log(myMapedArray2)

const myArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const [first, second, third, fourth, bird, ...rest] = myArray4

console.log(first, second, third, fourth, bird)
console.log(rest) 



console.log("")
console.log("")



// ---------------------- 3.Objects ---------------------- //
const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

console.log(object1.name)
const fieldName = 'age'
console.log(object1[fieldName])

console.log(object1.address)
console.log(object1['secret number'])

object1.address = 'Helsinki'
object1['secret number'] = 12341

console.log(object1.address)
console.log(object1['secret number'])



console.log("")
console.log("")



// ---------------------- 4.Functions ---------------------- //
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result1 = sum(1, 5)
console.log(result1)

const square = p => {
    console.log(p)
    return p * p
}

const t = [1, 2, 3]
const tSquared = t.map(p => p * p)


function product(a, b) {
    return a * b
}

const result2 = product(2, 6)



console.log("")
console.log("")



// ---------------------- 5.Object methods and "this"s ---------------------- //
const arto1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function () {
        console.log('hello, my name is ' + this.name)
    },
}

arto1.greet()

const arto2 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function () {
        console.log('hello, my name is ' + this.name)
    },
}

arto2.growOlder = function () {
    this.age += 1
}

console.log(arto2.age)   // 35 is printed
arto2.growOlder()
console.log(arto2.age)   // 36 is printed

const arto3 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function () {
        console.log('hello, my name is ' + this.name)
    },
    doAddition: function (a, b) {
        console.log(a + b)
    },
}

arto3.doAddition(1, 4)        // 5 is printed

const referenceToAddition = arto3.doAddition
referenceToAddition(10, 15)   // 25 is printed



console.log("")
console.log("")



// ---------------------- 6.Classes ---------------------- //
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('hello, my name is ' + this.name)
    }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()
