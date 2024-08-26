var languages = ['HTML', 'CSS', 'JavaScript'];


// 1. toString() ->
console.log(languages.toString()); // HTML,CSS,JavaScript
// 2. join() -> chuyển mảng thành chuỗi
console.log(languages.join(' - '));
// 3. push() -> thêm phần tử vào cuối mảng
console.log('------');
console.log(languages.push('React', 'Angular'));
console.log(languages);
// 4. pop() -> xóa phần tử cuối cùng và trả về phần tử đó
console.log('------');
console.log(languages.pop());
console.log(languages);
// 5. shift() -> xóa phần tử đầu tiên và trả về phần tử đó
console.log('------');
console.log(languages.shift());
console.log(languages);
// 6. unshift() -> thêm phần tử vào đầu mảng
console.log('------');
console.log(languages.unshift('React', 'Angular'));
console.log(languages);
// 7. splice() -> xóa phần tử từ vị trí n đến vị trí m,
// nếu m không có thì xóa hết từ vị trí n
// làm thanh đổi mảng ban đầu
console.log('------');
console.log(languages);
console.log(languages.splice(1, 2));
console.log(languages);
// 8. concat() -> nối mảng
console.log('------');
console.log(languages.concat(['React', 'Angular']));
// 9. slice() -> cắt mảng từ vị trí n đến vị trí m, không thay đổi mảng ban đầu
console.log('------ slice()');
console.log(languages);
console.log(languages.slice(-1));
console.log(languages);



// Viết hàm tại đây
function getLastElement(array) {
    return array.slice(0);
}

// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']