// Viet ham filter2 hoat dong nhu ham filter build-in
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

// Ham filter build-in
var freeCourses = courses.filter(function (course, index) {
    return course.coin === 0;
})
console.log('freeCourses: ');
freeCourses.forEach(function (course) {
    console.log(course);
})

// Ham filter2
Array.prototype.filter2 = function (callback) {
    var output = [];
    if (typeof callback === 'function') {
        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                if (callback(this[index], index)) {
                    output.push(this[index]);
                }
            }
        }
    }
    return output;
}
var freeCourses2 = courses.filter2(function (course, index) {
    return course.coin === 0;
})
console.log('freeCourses2: ');
freeCourses2.forEach(function (course) {
    console.log(course);
})