// Object Oriented Programming
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    static BEANS_GRAM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
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
