{
  /**
   * Type Assertions ๐ฉ
   */

  // js๋ any ํ์
  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  // result.length; // string api๋ฅผ ์ฌ์ฉํ  ์ ์์ => why? any ํ์์ด๊ธฐ ๋๋ฌธ์
  // ๋ฐ๋ผ์ ํจ์์ ๋ฆฌํด๊ฐ ํ์์ด ๋๋ฌด๋๋ ๋ถ๋ชํ ๊ฒฝ์ฐ์๋ assertion์ ์ฌ์ฉํ  ์ ์์
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // application์ด ์ฃฝ์ด๋ฒ๋ฆผ ๐ฑ

  // ๋ฐ๋ผ์ 100% ํ์คํ์ง  ์์ผ๋ฉด assertion์ ์ฌ์ฉํ์ง ์๋ ๊ฒ์ด ์ข๋ค.

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  // const numbers = findNumbers()!; // ! : undefined๊ฐ ์๋์ด ํ์คํด! ๋ผ๋ ๋ป
  // numbers.push(2);

  const numbers = findNumbers();
  numbers!.push(2); // ! : undefined๊ฐ ์๋์ด ํ์คํด! ๋ผ๋ ๋ป (์์ ์๋) ๐ฑ

  const button = document.querySelector("class");
  // querySelector<E extends Element = Element>(selectors: string): E | null;
  // querySelector()๋ ํด๋น ํด๋์ค๊ฐ ์์ผ๋ฉด null์ ๋ฐํํ๋ค.
  // ๋ฐ๋ผ์ ํ์คํ ๊ฒฝ์ฐ์๋ง assertion์ ์ฌ์ฉํด๋ผ~
}
