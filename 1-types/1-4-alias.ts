{
  /**
   * Type Aliases (새로운 타입을 내가 정의할 수 있)
   */
  type Text = string;
  const name: Text = "tom";
  const address: Text = "Korea";
  type Num = number;

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "tomas",
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let tomName: Name;
  tomName = "name";

  type JSON = "json";
  const json: JSON = "json";
}
