{
  /**
   * Enum => 타입스크립트에서 enum은 왠만하면 사용하지 않는 것이 좋음
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const THURSDAY = 3;
  const FRIDAY = 4;
  const SATURDAY = 5;
  const SUNDAY = 6;

  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
    THURSDAY: 3,
    FRIDAY: 4,
    SATURDAY: 5,
    SUNDAY: 6,
  });

  const dayOfToday = DAYS_ENUM.MONDAY;
  // 여러가지의 상수 값들을 한 곳에 모아서 타입이 보장

  // TypeScript
  // enum 대신 union type을 사용하길 권고 => union 타입은 타입을 정확하게 보장해줌
  enum Days {
    Monday, // => 0부터 시작
    // Monday = 1, // => 1부터 시작
    // Monday = "monday", // => 문자열도 할당이 가능하다. 하지만, 그 다음에 뭐가 올지 모르기 때문에 모두 값을 지정해줘야하는 이슈가 있다.
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Tuesday); // 1
  // let day = Days.Saturday;

  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10; // ?? => enum을 사용하면 타입이 정확하게 보장되지 않는다는 이슈가 있음
  console.log(day); // 5

  // Remark: enum을 사용할 수 밖에 없는 경우
  // Android 또는 IOS는 Kotlin, Swift 같은 언어를 이용하기 때문에 사용자의 데이터를 json을 묶어서 다른 클라이언트한테 보내야할 때
  // 모바일 클라이언트에서 사용하는 네이티브 프로그래밍 언어에서는 union 타입을 표현할 수 있는 방법이 없어서 enum 타입을 사용
}
