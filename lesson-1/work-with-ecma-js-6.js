var brand = 'F8';
var course = 'Javascript';


// Viet ham highlight
const highlight = ([first, ...strings], ...values) => {
    return values.reduce((acc, cur) => {
        return [...acc, `<span>${cur}</span>`, strings.shift()]
    }, [first]).join('');
}


const html = highlight`Học lập trình ${course} tại ${brand}!`;
console.log(html);

