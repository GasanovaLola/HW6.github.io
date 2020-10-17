// 1

function funk(n) {
    console.log(n);

    if (n !== 1) {
        funk(n-1);
    }
    else {
        return true;
    }
}

funk(5);

// 2

function sumTo(n) {
    if (n === 1) {
        return n;
    }
    return n + sumTo(n-1);
}

console.log(sumTo(3));

// 3

function factorial(n) {
    if (n === 1) {
        return n;
    }
    return n * factorial(n - 1);
}

console.log(factorial(4));

// 4

var mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]];

function funkConvert(mass) {
   return mass.reduce((acc, val) => Array.isArray(val) ? acc.concat(funkConvert(val)) : acc.concat(val), []);
}
console.log(funkConvert(mass));
