// Viet ham foreach2 tuong tu foreach
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

// ham foreach build-in
console.log('foreach');
courses.forEach(function (course, index) {
    console.log(index, course);
});

// viet ham foreach2
Array.prototype.forEach2 = function (callback) {
    if (typeof callback === 'function') {
        for (var i in this) {
            if (this.hasOwnProperty(i)) {
                callback(this[i], i);
            }
        }
    }
}

console.log('foreach2');
courses.forEach2(function (course, index) {
    console.log(index, course);
})