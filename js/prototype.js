// ------------------------------------------------------------------ //
// apply, call, bind 설명

// func : 호출될 함수를 나타내는 함수 객체
// thisArg : this 값으로 설정할 객체

// Function.prototype.apply
// [...args] : : 함수에 전달할 파라미터들로 구성된 배열 또는 유사 배열 객체
// func.apply(thisArg, [...args]);

// Function.prototype.call
// args1, args2, arg3, ... : 함수에 전달할 파라미터들
// func.call(thisArg, args1, args2, arg3, ...);

// Function.prototype.bind
// args1, args2, arg3, ... : 함수에 전달할 파라미터들
// func.bind(thisArg, args1, args2, arg3, ...); // 즉시 호출되지 않음

// ------------------------------------------------------------------ //
// apply, call 사용

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.showName = function () {
//     console.log(`My name is ${this.name}, and I am ${this.age} years old.`);
//   };
// }

// const person1 = new Person("Kim", 20);
// const person2 = new Person("Park", 30);
// const person3 = new Person("Choi", 25);

// person1.showName(); // My name is Kim, and I am 20 years old.
// person1.showName.apply(person2); // My name is Park, and I am 30 years old.
// person1.showName.call(person3); // My name is Choi, and I am 25 years old.
// person1.showName(); // My name is Kim, and I am 20 years old.

// ------------------------------------------------------------------ //
// bind 사용

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.showName = function () {
    console.log(`My name is ${this.name}, and I am ${this.age} years old.`);
  };
}

const person1 = new Person("Kim", 20);
const person2 = new Person("Park", 30);
const bindFunc = person1.showName.bind(person2);

person1.showName(); // My name is Kim, and I am 20 years old.
bindFunc(); // My name is Park, and I am 30 years old.
