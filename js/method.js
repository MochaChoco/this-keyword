// ------------------------------------------------------------------ //
// 1. 메소드의 this는 메소드를 호출한 객체를 가리킨다.

// const obj1 = {
//   name: "Kim",
//   showName: function () {
//     console.log(this.name);
//   },
// };

// const obj2 = {
//   name: "Park",
// };

// obj2.showName = obj1.showName;

// obj1.showName(); // Kim
// obj2.showName(); // Park

// ------------------------------------------------------------------ //
// 2. 프로토타입 객체 메소드 내부에서 사용된 this도 일반 메소드 방식과 마찬가지로 해당 메소드를 호출한 객체를 가리킨다.

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person("Kim");
console.log(me.getName()); // Kim

Person.prototype.name = "Park";
console.log(Person.prototype.getName()); // Park
