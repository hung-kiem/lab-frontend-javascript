// Viet ham every2 tuong tu every build-in
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

// ham every build-in

courses.length = 100000;
var isAllFree = courses.every(function (course, index) {
    console.log(course);
    return course.coin === 0;
})
console.log('isAllFree: ' + isAllFree);


// ham every2 build-in
Array.prototype.every2 = function (callback) {
    if (typeof callback === 'function') {
        for (var index in this) {
            if (!this.hasOwnProperty(index)) continue;
            if (!callback(this[index], index)) return false;
        }
        return true;
    }
}
var isAllFree2 = courses.every2(function (course, index) {
    return course.coin === 0;
})
console.log('isAllFree2: ' + isAllFree2);