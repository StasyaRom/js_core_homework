//task1
function upperCase(regExp) {
        if (regExp.match(/^[A-Z]/)) {
            console.log("String's starts with uppercase character");
        } else {
            console.log ("String's not starts with uppercase character ");  
        }
    }
    upperCase("")



//task2
/[A-Z]{1}[a-z]{4}[0-9]{1}\@gmail.com/.test("Qmail2@gmail.com")

function checkEmail() {
       let result = regExp.test(/[A-Z]{1}[a-z]{4}[0-9]{1}\@gmail.com/);
       console.log(result);
    }
    checkEmail("Qmail2@gmail.com");
