{
  // // JavaScript π©
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript π
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // JavaScript π©
  // function jsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TypeScript π
  // function fetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // JavaScript μ΅μ  λ¬Έλ² => TypeScript
  // Optional Typeμ μ¬μ©νλ κ²½μ°
  function printName1(firstName: string, lastName: string | undefined) {
    console.log(firstName);
    console.log(lastName);
  }

  printName1('Steve', 'Jobs');
  printName1('Ellie', undefined); // Optional Typeμ μ¬μ©νλ κ²½μ°μλ λλ²μ§Έ μΈμμ λν κ°μ λ£μ΄ μ£Όμ΄μΌ νλ€.
  printName1('Anna', undefined);

  // Optional Parameter (?) => νλμ μΈμλ§ μ λ¬ν΄λ λ¨
  function printName2(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName2('Steve', 'Jobs');
  printName2('Ellie'); // Ellie undefined
  printName2('Anna'); // Anna undefined

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message); // default message
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
