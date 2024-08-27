// Viet ham some2 hoat dong nhu ham some build-in
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'Ruby',
        coin: 100
    },
    {
        id: 3,
        name: 'HTML',
        coin: 150
    },
    {
        id: 4,
        name: 'CSS',
        coin: 0
    }
]

// Ham some build-in
var hasFree = courses.some(function (course, index) {
    return course.coin === 0;
})
console.log('hasFree: ' + hasFree)


// Ham some2
Array.prototype.some2 = function (callback) {
    if (typeof callback === 'function') {
        var arrayLength = this.length;
        for (var i = 0; i < arrayLength; i++) {
            if (callback(this[i], i)) return true;
        }
        return false;
    }
}
var hasFree2 = courses.some2(function (course, index) {
    return course.coin === 0;
})

console.log('hasFree2: ' + hasFree2)
