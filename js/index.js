const showThis = function () {
  console.log(this);
};

// 1. 함수 호출
showThis(); // window

// 2. 메소드 호출
const obj = {
  name: "test-obj",
  func: showThis,
};
obj.func(); // { "name": "test-obj", fuuc: f }

// 3. 생성자 함수 호출
const instance = new showThis(); // instance

// 4. apply/call/bind 호출
const bar = { name: "bar" };
showThis.apply(bar); // { "name": "bar" }
showThis.call(bar); // { "name": "bar" }
showThis.bind(bar)(); // { "name": "bar" }
