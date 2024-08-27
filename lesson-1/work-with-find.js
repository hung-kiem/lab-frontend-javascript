// Viet ham find2 hoat dong tuong tu find build-in
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

// Ham find build-in
var freeCourse = courses.find(function (course, index, originArray) {
    return course.coin === 0;
})
console.log('freeCourse: ');
console.log(freeCourse);

// Ham find2
Array.prototype.find2 = function (callback) {
    var output = null, arrayLength = this.length;
    if (typeof callback === 'function') {
        for (var i = 0; i < arrayLength; i++) {
            if (callback(this[i], i, this)) {
                output = this[i];
                break;
            }
        }
    }
    return output;
}
var freeCourse2 = courses.find2(function (course, index, originArray) {
    return course.coin === 0;
})
console.log('freeCourse2: ');
console.log(freeCourse2);