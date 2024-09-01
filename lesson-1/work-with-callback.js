// Viet ham map2 tuong tu map
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

// ham map
var htmls = courses.map(function (course, index) {
    return `<h2>${course.name}</h2>`
})

console.log('htmls: ' + htmls.join(''));

// ham map2
Array.prototype.map2 = function (callback) {
    var output = [], arrayLength = this.length;
    if (typeof callback === 'function') {
        for (var i = 0; i < arrayLength; i++) {
            var result = callback(this[i], i);
            output.push(result);
        }
    }
    return output;
}

var htmls2 = courses.map2(function (course, index) {
    return `<h2>${course.name}</h2>`
});

console.log('htmls2: ' + htmls2.join(''));