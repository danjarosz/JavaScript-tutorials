// Generator definition
function* gen() {
    // yield will pause the function on this line and will return the value
    const x = yield "pear"; // the function will stop here and return the object {value: "pear, done: false};
    const y = yield "banana";
    const z = yield "apple";
    // return "All done"; // in here returns {value: "All done", done: true}
    return x + y + z;
}

// Generator prepared
const myGen = gen();

// Generator execution
const res1 = myGen.next(); // it will run the function first time until yield occurs (line 4)
console.log(res1);
const res2 = myGen.next(10); // it will run the function to the next yield (line 5)
console.log(res2);
const res3 = myGen.next(5); // line 6
console.log(res3);
const res4 = myGen.next(3); // line 7
console.log(res4);