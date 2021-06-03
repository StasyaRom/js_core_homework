// task1 
let result = 1;
let arr = [2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
	result *= arr[i];
}
alert(result);


// task2
let arr = [0, 1, 2,  3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13, 14, 15];
for (let i = 0; i < arr.length; i++) {  
    if (i % 2 === 0){
    console.log(arr[i] + " is Even");
    }
    else {
    console.log(arr[i] + " is Odd");
    }
}


// task3
let min = 1;
let max = 500;

let arr = [];

function randArray(k) {
  for (let i = 0; i < k; i++) {
    arr[i] = (function (x, y) {
      return Math.floor(Math.random() * x) + y;
    })(max, min);
  }
}

const size = +prompt("Enter the array size");

randArray();

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// task4 (не бачу помилки, але чомусь не працює)
let a = prompt('Enter the variable a');
let b = prompt('Enter the variable b');
function raiseToDegree(a, b) {
    if (Number.isInteger(a, b)) {
        result Math.pow(a, b);
        alert (result);  
    } 
    else {
        alert('I work with integers only :(');
    }   
} 
raiseToDegree()


// task5
function findMin(arguments){
    let minValue = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (minValue > arguments[i]) minValue = arguments[i];
    }
    return minValue;
}
findMin([])


// task6 
function arrayUnique(arr) {
    const object = {};
    const myArray = [];
    var j = 0;
    for(let i = 0; i < arr.length; i++) {
         if(object[arr[i]] !== 1) {
               object[arr[i]] = 1;
               myArray[j++] = arr[i];
         }
    }
    return myArray;
}
arrayUnique([])


//task7
function lastElem(arr, count){
    if (count == null){
        console.log(arr.pop());
    }else{
        console.log(arr.slice(-count));
    }
}
console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));



// task8
function firstLetterUpCase(str) {
return str
    .toLowerCase()
    .split(' ')
    .map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
 }
 console.log(firstLetterUpCase('i love java script'))
