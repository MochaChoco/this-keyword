// ------------------------------------------------------------------ //
// 1. 생성자 함수 예시

function Person(nm) {
  this.name = nm;
  console.log(this);
  // 암묵적으로 this에 바인딩 된 객체를 반환한다.
}

// 생성자 함수이므로 {name : 'Kim'} 객체가 반환됨
const person1 = new Person("Kim"); // { name: 'Kim' }
console.log(person1); // { name: 'Kim' }

// 생성자 함수가 아니므로 아무 값도 반환되지 않음.
const person2 = Person("Park"); // window
console.log(person2); // undefined
