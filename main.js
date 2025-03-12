// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// 2. Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3));

// 3. Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(4, 2));

// 4. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This function runs immediately!");
})();

// 5. Constructor Function
function Person(name, age) {
    this.name = name;   
    this.age = age;
}
const person1 = new Person("John", 30);
console.log(person1.name, person1.age);
