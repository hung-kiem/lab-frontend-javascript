/*
* Array method
* foreach
* every
* some
* filter
* find
* map
* reduce
* */

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

// foreach: duyet tung phan tu
courses.forEach(function (course, index) {
    console.log(index);
    console.log(course);
});

// every -> tat ca phan tu deu thoa man dieu kien
var isFree = courses.every(function (course, index) {
   return course.coin === 0;
});
console.log(`isFree: \`${isFree}` )

//some -> can it nhat 1 phan tu thoa man dieu kien
var isFeeSome = courses.some(function (course, index) {
    console.log(course)
    return course.coin === 0
});
console.log(isFeeSome)

// find
var isExitJava = courses.find(function (course, index) {
    console.log(course);
    return course.name = 'Java';
})
console.log(isExitJava)

// map
var callbackFunction = function (course) {
    console.log(course)
    course.name = 'Khoa hoc' + course.name;
    course['xin-chao'] = 'Cua ban het ' + course.coin + ' Coins'
    return course;
}
var newCourses = courses.map(callbackFunction);
console.log(newCourses)

//reduce
var i = 0;
var coinHandler = function (accumulator, currentValue, currentIndex, originArray) {
    console.table({
        'Luot chay: ': currentIndex,
        'Bien luu tru: ': accumulator
    })
    return accumulator + currentValue.coin;
}

var totalCoins = courses.reduce(coinHandler, 10);
console.log(totalCoins)

var totalCoin = courses.reduce(function (total, course, index) {
   console.log(index, course);
    return total + course.coin;
})
