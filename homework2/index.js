// task1
let x = 1;
let y = 2;
let xRes1 = x + "";
let yRes1 = y + "";
let res1 = xRes1 + yRes1 ;
console.log(res1);
console.log(typeof res1);
let res2 = (x < y) + "2";
console.log(res2);
console.log(typeof res2);
let res3 = (x < y);
console.log(res3);
console.log(typeof res3);
let res4 = Math.sqrt(-(x + y));
console.log(res4);
console.log(typeof res4);


// task2
let num = prompt('Enter the number');
if (num % 2 === 0 && num > 0) {
    console.log('This number is even positive');
}   else if (num % 7 === 0) {
    console.log('This number is multiple 7');
}

// task3
const arr = [];
arr[0] = 19;
arr[1] = 'February';
arr[2] = (10 == 10);
arr[3] = null;
console.log(arr.length);
let value = prompt('Enter your value');
arr[4] = value;
console.log(arr[4]);
arr.shift();
console.log(arr);

// task4
let cities = ["Rome", "Lviv", "Warsaw"]; 
cities = cities.join('*');
console.log(cities);

// task5
let question = prompt('Are you an adult?');
const isAdult = question;
if (isAdult >= 18) {
    alert('You are an adult');
}   else if (isAdult < 18) {
    alert('You are too young')
}

// task6
let a = +prompt('Enter first side length');
let b = +prompt('Enter second side length');
let c = +prompt('Enter third side length');
if (a > 0 && b > 0 && c > 0) {
    const p = (a + b + c) / 2;
    const triangleArea = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log('Triangle area:' + triangleArea.toFixed(3));
}   else {
    alert ('Incorrect value');
}
if ((a * a + b * b === c * c) || (a * a + c * c === b * b) || (b * b + c * c === a * a)) {
    console.log('The triangle is right-angeled');
}   else {
    console.log('The triangle isn`t right-angeled'); 
}

// task7
const date = new Date();
const nowHours = date.getHours();
if (nowHours >= 23 && nowHours <= 5) {
    alert ('Good night');
}
else if (nowHours > 5 && nowHours < 11) {
    alert ('Good morning');
}
else if (nowHours >= 11 && nowHours < 17) {
    alert ('Good day');
}
else if (nowHours >= 17 && nowHours < 23) {
    alert ('Good evening');
}

//?
const date = new Date();
const nowHours = date.getHours();
result = (nowHours >= 23 && nowHours <= 5) ? alert ('Good night') : alert ('Good day') || (nowHours > 5 && nowHours < 11) ? alert ('Good morning') : alert ('Good day') || (nowHours >= 11 && nowHours < 17) ? alert ('Good day') : alert ('Good night') || (nowHours >= 17 && nowHours < 23) ? alert ('Good evening'): alert ('Good night');
