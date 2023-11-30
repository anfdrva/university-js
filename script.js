//task1
// let admin;
// let name;
// name = "Васьок";
// admin = name;
// console.log(admin);

//task2
// var a = 2;
// var x = 1 + (a *= 2);
// console.log(x);

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
// let age = 90;
// if (age >= 14 && age <= 90) {
//     console.log(`age = ${age}`);
//     console.log("Вік знаходиться в діапазоні від 14 до 90 включно");
// } else {
//     console.log(`age = ${age}`);
//     console.log("Вік не знаходиться в діапазоні від 14 до 90 включно");
// }

//task7
// for (let i = 2; i <= 10; i += 2){
//     console.log(i);
// }

//task8
// var i = 0;
// while (i < 3) {
//     console.log("номер " + i + "!");
//     i++;
// }

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
// function min(a, b) {
//     return a < b ? a : b;
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));


// var myFunction = function() {
//     // тіло функції
// };

// myFunction();

// var addNumbers = function sum(a, b) {
//     return a - b;
// };

// //task1
// function sumArgs() {
//     return Array.prototype.reduce.call(arguments, function (a, b) {
//         return a + b;
//     }, 0);
// }

// alert(sumArgs(1, 2, 3));


//task2
// function applyAll(func, ...args) {
//     return func.apply(null, args);
// }

// alert(applyAll(Math.max, 2, -2, 3));
// alert(applyAll(Math.min, 2, -2, 3));

// function sum() {
//     return Array.prototype.reduce.call(arguments, function (a, b) {
//         return a + b;
//     });
// }

// function mul() {
//     return Array.prototype.reduce.call(arguments, function (a, b) {
//         return a * b;
//     });
// }

// alert(applyAll(sum, 1, 2, 3));
// alert(applyAll(mul, 2, 3, 4));

//---------------------------------------------------------------------------------------------------------

//task1
// var styles = ["Джаз", "Блюз"];
// console.log(styles);
// styles.push("Рок-н-Ролл");
// console.log(styles);
// styles[styles.length - 2] = "Класика";
// console.log(styles);
// alert(styles.shift());
// styles.unshift("Реп", "Реггі");
// console.log(styles);



//task2
// var arr = ["Яблуко", "Апельсин", "Груша", "Лимон"];
// alert(arr[Math.floor(Math.random() * arr.length)]);



//task3
// var obj = { className: 'open menu' };

// function addClass(obj, cls) {

//   var classes = obj.className.split(' ');

//   if (classes.indexOf(cls) === -1) {
//     classes.push(cls);
//   }

//   obj.className = classes.join(' ');
// }

// addClass(obj, 'new'); // obj.className = 'open menu new'
// addClass(obj, 'open'); // без змін (клас вже існує)
// addClass(obj, 'me');   // obj.className = 'open menu new me'
// alert(obj.className);  // "open menu new me"


//task4
// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// // Приклад виклику функції
// let arr = [5, 3, 8, 1, 0, 2.5];
// filterRangeInPlace(arr, 1, 4);
// alert(arr);



//task5
// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var gleb = { name: "Глеб", age: 6 };

// // Масив об'єктів
// var people = [vasya, masha, gleb];

// // Сортування масиву об'єктів за віком
// people.sort(function (a, b) {
//   return a.age - b.age;
// });

// // Виведення списку імен після сортування
// for (var i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }

// // Виведення віку першої особи після сортування
// alert(people[0].age);

//task1

// function Calculator() {
//   this.firstValue = 0;
//   this.secondValue = 0;

//   // Метод для отримання двох значень
//   this.read = function () {
//     this.firstValue = +prompt('Введіть перше значення', 0);
//     this.secondValue = +prompt('Введіть друге значення', 0);
//   };

//   // Метод для обчислення суми
//   this.sum = function () {
//     return this.firstValue + this.secondValue;
//   };

//   // Метод для обчислення добутку
//   this.mul = function () {
//     return this.firstValue * this.secondValue;
//   };
// }

// var calculator = new Calculator();

// calculator.read();

// alert('Сума = ' + calculator.sum());
// alert('Добуток = ' + calculator.mul());

//task2

function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  // Метод для додавання нового методу
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };

  // Метод для обчислення виразу
  this.calculate = function (str) {
    let splitInput = str.split(' ');
    let a = +splitInput[0];
    let operator = splitInput[1];
    let b = +splitInput[2];

    if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
      throw new Error('Invalid input or operator');
    }

    return this.methods[operator](a, b);
  };
}

var calc = new Calculator();

try {
  var result = calc.calculate('5 + 7');
  alert(result); // 12
} catch (error) {
  alert(error.message);
}

var powerCalc = new Calculator();

powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => Math.pow(a, b));

try {
  var resultPowerCalc = powerCalc.calculate('2 ** 3');
  alert(resultPowerCalc); // 8
} catch (error) {
  alert(error.message);
}


// var arr = [11, 89, 4, -23, 0];
// arr.splice(3, 0, 8); // Вставляє 8 перед елементом з індексом 3, не видаляючи жодного елемента

// var newArray = arrayOrString.slice(begin, end);

///////////////////////////////////////////////////////////////////////////////////////
