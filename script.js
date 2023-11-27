//task1
let admin;
let name;
name = "Васьок";
admin = name;
console.log(admin);

//task2
var a = 2;
var x = 1 + (a *= 2);
console.log(x);

//task5
// function askForName() {
//         var name = prompt("Яка «офіційнa» назва JavaScript?");
//         if (name === 'ECMAScript') {
//           alert("Вірно!");
//         } else {
//           alert("Не знаєте? «ECMAScript»!");
//         }
//       }
// window.onload = askForName;

//task6
let age = 90;
if (age >= 14 && age <= 90) {
    console.log(`age = ${age}`);
    console.log("Вік знаходиться в діапазоні від 14 до 90 включно");
} else {
    console.log(`age = ${age}`);
    console.log("Вік не знаходиться в діапазоні від 14 до 90 включно");
}

//task7
for (let i = 2; i <= 10; i += 2){
    console.log(i);
}

//task8
var i = 0;
while (i < 3) {
    console.log("номер " + i + "!");
    i++; 
}

//task9
// let browser;
// if (browser === 'IE') {
//     alert("О, та у вас IE!"); 
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert('Так, і ці браузери ми підтримуємо');
// }else {
//     alert('Ми сподіваємося, що і в вашому браузері все ок!');
// }

//task10
function min(a, b) {
    return a < b ? a : b;
}

console.log(min(2, 5));   
console.log(min(3, -1));  
console.log(min(1, 1));  


var myFunction = function() {
    // тіло функції
};

myFunction();

var addNumbers = function sum(a, b) {
    return a - b;
};

//task1
function sumArgs() {
    return Array.prototype.reduce.call(arguments, function (a, b) {
        return a + b;
    }, 0);
}

alert(sumArgs(1, 2, 3));


//task2
function applyAll(func, ...args) {
    return func.apply(null, args);
}

alert(applyAll(Math.max, 2, -2, 3)); 
alert(applyAll(Math.min, 2, -2, 3)); 

function sum() {
    return Array.prototype.reduce.call(arguments, function (a, b) {
        return a + b;
    });
}

function mul() {
    return Array.prototype.reduce.call(arguments, function (a, b) {
        return a * b;
    });
}

alert(applyAll(sum, 1, 2, 3)); 
alert(applyAll(mul, 2, 3, 4)); 

