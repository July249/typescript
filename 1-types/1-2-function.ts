{
  // // JavaScript 💩
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript 💕
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // JavaScript 💩
  // function jsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TypeScript 💕
  // function fetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // JavaScript 최신 문법 => TypeScript
  // Optional Type을 사용하는 경우
  function printName1(firstName: string, lastName: string | undefined) {
    console.log(firstName);
    console.log(lastName);
  }

  printName1("Steve", "Jobs");
  printName1("Ellie", undefined); // Optional Type을 사용하는 경우에는 두번째 인자에 대한 값을 넣어 주어야 한다.
  printName1("Anna", undefined);

  // Optional Parameter (?)
  function printName2(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName2("Steve", "Jobs");
  printName2("Ellie");
  printName2("Anna");

  // Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }

  printMessage(); // 'default message'

  // Rest Parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, c) => a + c, 0);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
