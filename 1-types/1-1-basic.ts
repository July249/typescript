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
  let name: undefined; // π© => μ΄λ κ² μ¬μ©νμ§λ μμμ
  let age: number | undefined; // optional type (λ°μ΄ν° νμμ΄ μκ±°λ μλλ©΄ μμ§ κ²°μ λμ§ λͺ»νκ±°λ)
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null => κ°μ΄ μκ±°λ μμ μλ μλ€κ³  νννκΈ° μν΄ optional typeμΌλ‘ μμ£Ό μ¬μ©
  let person: null; // π©
  let person2: string | null;

  // unknown π© => κΈμ...
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any π© => μ΄λ€ κ²μ΄λ !!
  let anything: any = 0;
  anything = "hello";

  // void => μλ¬΄κ²λ return νμ§ μμΌλ©΄ void!, νμ¬ μ»¨λ²€μμ λ°λΌ μλ΅λ κ°λ₯
  function print(): void {
    console.log("hello");
    return;
  }

  let unusable: void = undefined; // π©

  // never => λ¦¬ν΄μ΄ μλ¨
  function throwError(message: string): never {
    // message => server (log)
    // μλ¬λ₯Ό λμ§κ±°λ
    throw new Error(message);
    // κ³μ while λ¬Έμ λλ¦¬κ±°λ
    while (true) {}
  }

  let neverEnding: never; // π©

  // object => μμνμμ μ μΈν λͺ¨λ  κ°μ²΄νμμ λ΄μ μ μμ
  let obj: object; // π©
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "tom" });
  acceptSomeObject({ animal: "dog" });
}
