{
  /**
   * Type Inference
   */
  let text = "hello"; // 별도로 타입을 명시하지 않아도 에러가 안나옴
  // text = 1; // 선언함과 동시에 문자열을 할당해서 TypeScript가 알아서 추론함

  // function print(message) {
  // function의 파라미터는 암묵적으로 Type을 any로 가지고 있음
  // 따라서 명확하게 타입을 지정하여 주는 것이 좋음
  function print(message: string) {
    // function print(message = 'hello') { // default 값을 지정하여 암묵적으로 추론할 수 있게 해주는 것도 가능
    console.log(message);
  }
  print("hello");
  // print(1);
}
