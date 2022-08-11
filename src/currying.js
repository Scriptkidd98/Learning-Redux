//these are called currying. using a regular function and an arrow function
const add = (a) => (b) => a * b;
console.log( add(3)(7) );

function add2(a) {
    return function(b) {
        return a + b;
    }
}
add2(3)(7)