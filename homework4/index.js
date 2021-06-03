//task1
function calcRectangleArea() {
    let width = +prompt('Enter width of rectangle:', '');
    let height = +prompt('Enter height of rectangle:', '');
    if (width > 0 && height > 0) {
        return (width + height) * 2;
    } else {
        if (width < 0 && height < 0) {
            throw new Error('Incorrect value : side lengths < 0');
        } else {
            throw new Error('Incorrect value : side lengths is not a number');
        }
    }
}
try {
    let result = calcRectangleArea();
    console.log(result);
} catch (exception) {
    console.log(exception.name);
    console.log(exception.message);
    console.log(exception.stack);
}

//task2
function checkAge() {
    let age = +prompt('Enter your age :', '');
    if (age >= 14) {
        return (age);
    } else {
        if (age < 14) {
            throw new Error('You are too yang');

        } else {
            if (typeof age === 'undefined') {
                throw new Error('The field is empty! Please enter your age');
            } else {
                throw new Error('You entered a non-numeric value');
            }
        }
    }
}

try {
    let result = checkAge();
    alert(result);
} catch (exeption) {
    console.log(exeption.name);
    console.log(exeption.message);
    console.log(exeption.stack);
}

//task3
