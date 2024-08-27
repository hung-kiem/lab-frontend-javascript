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
courses.length = 100000;
var freeCourse = courses.find(function (course, index, originArray) {
    console.log('course: ');
    return course.coin === 0;
})
console.log('freeCourse: ');
console.log(freeCourse);

// Ham find2
Array.prototype.find2 = function (callback) {
    var output = null;
    if (typeof callback === 'function') {
        for (var index in this) {
            if (!this.hasOwnProperty(index)) continue;
            if (callback(this[index], index, this)) {
                output = this[index];
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