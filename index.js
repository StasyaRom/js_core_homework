// task2
let surname = "Romaniuk";
console.log(surname);

// task3
let month = "February";
let number = 02;
console.log(month);
console.log(number);
month = number;
console.log(month);
console.log(number);

// task4
let name = "Anastassiya";
console.log(typeof name);
let age = 25;
console.log(typeof age);
let employee = true;
console.log(typeof employee);
let undefStatus;
console.log(typeof undefStatus);
let diploma = {degree:"bachelor", profile:"architecture"};
console.log(typeof diploma);

// task5
let ageVerification = confirm("Are you an adult?");
alert(ageVerification);
let isAdult = ageVerification;
console.log(isAdult);

// task6
let name = "Anastassiya";
console.log(typeof name);
let surname = "Romaniuk";
console.log(typeof surname);
let group = 602;
console.log(typeof group);
let yearOfBirth= 1996;
console.log(typeof yearOfBirth);
let getMarried = false;
getMarried = true;
console.log(typeof getMarried);
let arr = ["Anastassiya","Romaniuk","602","1996","false"];
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[0]);
console.log(arr[1]);
let graduationOfCourse;
console.log(graduationOfCourse);

// task7
let question1 = prompt("What`s your login?", "Your login");
let question2 = prompt("What`s your email?", "Your email");
let question3 = prompt("What`s your password?", "Your password");
alert("Dear " + question1 + ",your email is " + question2 + ",your password is " + question3);

// task8
let hour = prompt("What time do you want to convert?", "1hour");
alert(60 * 60 + "seconds");
let day = prompt("What time do you want to convert?", "1day");
alert(60 * 60 * 24 + "seconds");
let month = prompt("What time do you want to convert?", "1month");
alert(60 * 60 * 31 + "seconds");
