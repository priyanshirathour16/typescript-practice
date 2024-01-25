function multiply(a, b, c) {
    return (a * b) * (c || 1);
}
console.log(multiply(2, 2));
console.log(multiply(2, 2, 2));
