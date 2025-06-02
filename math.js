const add = function (x, y) {
    return x + y;
};

const sub = function (a, b) {
    // This is subtracts a and b 
    return a - b;
};

// exports.chesta= 'This is add function';

// default
module.exports = {
    adding: add,
    subtracting: sub,
};