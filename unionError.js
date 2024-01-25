function printStatusCode(code) {
    console.log("My status code is ".concat(code.toUpperCase(), ".")); // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
}
