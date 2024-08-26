var languages = [
    'Java',
    'Ruby',
    'Go',
    'Javascript'
];

var length = languages.length;

for (var i = 0; i < languages.length; i++) {
    console.log(languages[i]);
    // languages.pop();
    // console.log(languages);
}

for (var i in languages) {
    console.log(i);
}

for (var value of languages) {
    console.log(value)
}

// đệ quy
var array = ['1', '2', '3', '1', '2', '3'];
// c1: dung Set
console.log(new Set(array));
console.log([...(new Set(array))]);

// c2 dung de quy
function loop(start, end, callback) {
    if (start < end) {
        callback(start);
        return loop(start + 1, end, callback);
    }
}

loop(0, languages.length, function (index) {
    console.log('index: ' + index);
})