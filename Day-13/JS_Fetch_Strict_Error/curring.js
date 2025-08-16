//Currying transforms a function with multiple arguments into a sequence of functions with one argument each.

function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(add(4)(3)(5));