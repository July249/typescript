{
  // Array => 한가지 타입만 들어갈 수 있음
  const fruits: string[] = ["🍎", "🍌"];
  // const scores: number[] = [1, 3, 4];
  const scores: Array<number> = [1, 3, 4];

  // Note: Array<string> vs string[]
  // readonly에서는 Array<>로 작성 불가
  // readonly는 객체의 불변성을 보장하기 위함
  // function printArray(fruits: readonly Array<string>) {}
  function printArray(fruits: readonly string[]) {}

  // Tuple -> Tuple 대신 interface, type alias, class 사용을 권장
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  // 객체 구조분해할당으로 위 (index 번호로 값을 찾는)문제를 해결할 수 있기는 함
  const [name, age] = student;
}
