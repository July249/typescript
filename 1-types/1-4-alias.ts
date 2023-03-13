{
  /**
   * Type Aliases (새로운 타입을 내가 정의할 수 있음)
   */
  type Text = string;
  const name: Text = 'tom';
  const address: Text = 'Korea';
  type Num = number;

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'tomas',
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let tomName: Name;
  tomName = 'name';

  type JSON = 'json';
  const json: JSON = 'json'; // 할당할 수 있는 값을 fix할 수 있음

  type Bool = true;
  // let isCat: Bool = false; // Type 'false' is not assignable to type 'true'
  let isCat: Bool = true;
}
