// Object Oriented Programming
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    static BEANS_GRAM_PER_SHOT: number = 7; // class level에서만 사용됨 => object마다 생성되거나 사용되지 않음 => 메모리 낭비가 없음
    coffeeBeans: number = 0; // instance (object) level에서 사용됨

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // class 내부의 어떠한 속성값도 필요하지 않음
    // new CoffeeMachine으로 하지 않아도 instance를 생성할 수 있음
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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

  const espressoMachine = new CoffeeMachine(32);
  console.log(espressoMachine);
  const espressoMachine2 = new CoffeeMachine(14);
  console.log(espressoMachine2);

  const coffee = espressoMachine.makeCoffee(2);
  console.log(coffee);

  const espressoMachine3 = CoffeeMachine.makeMachine(3);
  console.log(espressoMachine3);
}
