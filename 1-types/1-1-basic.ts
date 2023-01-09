{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigInt, symbol, undefined, null
   * Object: function, array, ....
   *
   *
   * */

  // number
  const num: number = 0;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩 => 이렇게 사용하지는 않아요
  let age: number | undefined; // optional type (데이터 타입이 있거나 아니면 아직 결정되지 못했거나)
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null => 값이 있거나 없을 수도 있다고 표현하기 위해 optional type으로 자주 사용
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩 => 글쎄...
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩 => 어떤 것이든!!
  let anything: any = 0;
  anything = "hello";

  // void => 아무것도 return 하지 않으면 void!, 회사 컨벤션에 따라 생략도 가능
  function print(): void {
    console.log("hello");
    return;
  }

  let unusable: void = undefined; // 💩

  // never => 리턴이 안됨
  function throwError(message: string): never {
    // message => server (log)
    // 에러를 던지거나
    throw new Error(message);
    // 계속 while 문을 돌리거나
    while (true) {}
  }

  let neverEnding: never; // 💩

  // object => 원시타입을 제외한 모든 객체타입을 담을 수 있음
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "tom" });
  acceptSomeObject({ animal: "dog" });
}
