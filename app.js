// union types help you to use different kinds of types on variables
// when using unions, your function could have parameters that accept different types of values that you've defined
function combine(input1, input2) {
    // TypeScript will complain about concatinating a string and a number hence we'll provide a condition for checking that
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(25, 58);
console.log(combinedAges);
var combinedFun = combine("Anna", 25);
console.log(combinedFun);
