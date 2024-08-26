var depth = [1, 2, [3, 4], 5, 6, [7, 8, 9, 10]] ;

var flatArray = depth.reduce(function (accumulator, currentValue) {
    console.log('accumulator', accumulator);
    console.log('currentValue', currentValue);
    return accumulator.concat(currentValue);
}, []);

console.log(flatArray); // Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.reduce2 = function (callback, result) {
    var i = 0;
    if (arguments.length === 1) {
        result = this[0];
        i = 1;
    }
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

var array2 = [1, 2, 3, 4, 5];
var sum = array2.reduce2(function (total, number) {
    return total + number;
} );
console.log('sum', sum); // Expected: 15
