exports.printMsg = (str1) => {
    console.log(`Here is the inserted string: ${str1}`)
}

exports.InchesToCentimeters = (inches) => {
    // returns converted value in cm
    return (inches * 2.54)
}

// do any math operation against a numeric value(s), it can accept one, or more than one 
// value (argument) and then return the result of applying a math formula 
exports.FahrenheitToCelsius = (temperature) => {
    // returns converted value in Celsius
    return ((temperature - 32) * 5/9)
}

// any advanced function of your choice
exports.calculateFibonacci = (n) => {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}
