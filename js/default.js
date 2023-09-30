// ------------------------------------------------------------------ //
// 1. 전역 함수의 this는 window를 가리킨다.

// showThis 함수를 선언(전역 함수)
// function showThis() {
//   console.log(this);
// }

// this.showThis();

// ------------------------------------------------------------------ //
// 2. 내부 함수의 this도 window를 가리킨다.

// function showOuter() {
//   console.log("outer's this: ", this); // window
//   function showInner() {
//     console.log("inner's this: ", this); // window
//   }
//   showInner();
// }
// showOuter();

// ------------------------------------------------------------------ //
// 3. 메소드의 내부 함수의 this도 window를 가리킨다.

// 바깥에서 var로 선언한 변수는 window 객체에 바인딩됨
// var value = 1;

// const obj = {
//   value: 50,
//   showOuter: function () {
//     console.log("show's this: ", this); // obj
//     console.log("show's this.value: ", this.value); // 50

//     function showInner() {
//       console.log("showInner's this: ", this); // window
//       console.log("showInner's this.value: ", this.value); // 1
//     }
//     showInner();
//   },
// };

// obj.showOuter();

// ------------------------------------------------------------------ //
// 4. 콜백함수의 경우에도 this는 window를 가리킨다.

// 바깥에서 var로 선언한 변수는 window 객체에 바인딩됨
// var value = 1;

// const obj = {
//   value: 50,
//   show: function () {
//     setTimeout(function () {
//       console.log("callback's this: ", this); // window
//       console.log("callback's this.value: ", this.value); // 1
//     }, 500);
// };

// obj.show();

// ------------------------------------------------------------------ //
// 5. 이벤트 핸들러의 this는 이벤트를 받는 HTML 요소를 가리킨다.
// const btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   console.log(this);
// });

// ------------------------------------------------------------------ //
// ※ this가 전역객체를 참조하는 것을 회피하는 방법1

// 바깥에서 var로 선언한 변수는 window 객체에 바인딩됨
// var value = 1;

// const obj = {
//   value: 50,
//   showOuter: function () {
//     const innerThis = this; // 멤버 함수가 가리키는 this(obj)를 innerThis변수에 할당

//     function showInner1() {
//       console.log("showInner1's this: ", this); // window
//       console.log("showInner1's this.value: ", this.value); // 1
//     }

//     // innerThis가 가리키는 변수(obj)를 참조한다.
//     function showInner2() {
//       console.log("showInner2's this: ", innerThis); // obj
//       console.log("showInner2's this.value: ", innerThis.value); // 50
//     }

//     // 화살표 함수의 경우 상위 스코프의 this(이 경우에는 obj)를 가리킨다.
//     const showInner3 = () => {
//       console.log("showInner3's this: ", this); // obj
//       console.log("showInner3's this.value: ", this.value); // 50
//     };

//     showInner1();
//     showInner2();
//     showInner3();
//   },
// };

// obj.showOuter();

// ------------------------------------------------------------------ //
// ※ this가 전역객체를 참조하는 것을 회피하는 방법2

// 바깥에서 var로 선언한 변수는 window 객체에 바인딩됨
var value = 1;

const obj = {
  value: 50,
  showOuter: function () {
    console.log("showOuter's this: ", this); // obj
    console.log("showOuter's this.value: ", this.value); // 100

    function showInner() {
      console.log("showInner's this: ", this); // window
      console.log("showInner's this.value: ", this.value); // 50
      console.log("showInner's arguments: ", arguments);
    }

    showInner.apply(obj, [1, 2]);
    showInner.call(obj, 1, 2);
    showInner.bind(obj)(1, 2);
  },
};

obj.showOuter();
