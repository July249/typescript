{
  /**
   * Type Assertions 💩
   */

  // js는 any 타입
  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  // result.length; // string api를 사용할 수 없음 => why? any 타입이기 때문임
  // 따라서 함수의 리턴값 타입이 너무나도 분명한 경우에는 assertion을 사용할 수 있음
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // application이 죽어버림 😱

  // 따라서 100% 확실하지  않으면 assertion은 사용하지 않는 것이 좋다.

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  // const numbers = findNumbers()!; // ! : undefined가 아님이 확실해! 라는 뜻
  // numbers.push(2);

  const numbers = findNumbers();
  numbers!.push(2); // ! : undefined가 아님이 확실해! 라는 뜻 (위와 상동) 😱

  const button = document.querySelector("class");
  // querySelector<E extends Element = Element>(selectors: string): E | null;
  // querySelector()는 해당 클래스가 없으면 null을 반환한다.
  // 따라서 확실한 경우에만 assertion을 사용해라~
}
