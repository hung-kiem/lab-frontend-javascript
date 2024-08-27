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
courses.length = 100000;
var courseNames = courses.map(function (course, index, originArray) {
    console.log('course: ');
    course.name = 'Khoa hoc ' + course.name;
    return course;
})
console.log('courseNames: ');
console.log(courseNames);

// Ham map2
Array.prototype.map2 = function (callback) {
    var output = [];
    if (typeof callback === 'function') {
        for (var index in this) {
            if (!this.hasOwnProperty(index)) continue;
            output.push(callback(this[index], index, this));
        }
    }
    return output;
}

var courseNames2 = courses.map2(function (course, index, originArray) {
    course.name = 'Khoa hoc ' + course.name;
    return course;
})
console.log('courseNames2: ');
console.log(courseNames2);