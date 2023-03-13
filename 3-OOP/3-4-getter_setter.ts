// Getter and Setter
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const espress = CoffeeMachine.makeMachine(32);
  espress.fillCoffeeBeans(32);

  // class User {
  //   private firstName: string;
  //   private lastName: string;
  //   // fullName: string; // => 한번만 할당할 수 있는 것이 아니도록 하기 위함
  //   get fullName(): string {
  //     return `${this.firstName} ${this.lastName}`;
  //   }

  //   constructor(firstName: string, lastName: string) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     // this.fullName = `${firstName} ${lastName}`;
  //   }
  // }

  // firstName, lastName 각각에 private를 선언하고, constructor를 작성하기 귀찮음
  // 단축속성을 이용함 => constructor의 인자에 private 또는 public을 작성하면 됨!
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private myAge = 4;
    get age() {
      return this.myAge;
    }
    set age(num: number) {
      this.myAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.age); // 4
  user.age = 6;
  console.log(user.age); // 6

  console.log(user.fullName); // Steve Jobs
  // user.firstName = 'Ellie'; => private이므로 이제 접근 못함
  console.log(user.fullName); // Steve Jobs => firstName이 변경되지 않음 => getter를 사용하니까 이제 "Ellie Jobs"가 출력됨
}
