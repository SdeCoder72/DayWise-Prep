"use strict";
x = 10;
console.log(x);

function demoStrict() {
    try {
        undeclaredVar = 10; //Throws Reference Error

    }
    catch(error) {
        console.error("Strict Mode Error " , error.message);
    }
}
demoStrict();