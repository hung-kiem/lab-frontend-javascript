// Viet ham map2 hoat dong nhu ham map build-in
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

// Ham map build-in
var courseNames = courses.map(function (course, index, originArray) {
    course.name = 'Khoa hoc ' + course.name;
    return course;
})
console.log('courseNames: ');
console.log(courseNames);

// Ham map2
Array.prototype.map2 = function (callback) {
    var output = [], arrayLength = this.length;
    if (typeof callback === 'function') {
        for (var i = 0; i < arrayLength; i++) {
            output.push(callback(this[i], i, this));
        }
    }
    return output;
}