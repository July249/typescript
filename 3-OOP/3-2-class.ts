// Object Oriented Programming
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    #shots: number;
    #coffeeBeans: number;
    #BEANS_GRAM_PER_SHOT: number;
    constructor(
      shots: number,
      coffeeBeans: number,
      BEANS_GRAM_PER_SHOT: number
    ) {
      this.#shots = shots;
      this.#BEANS_GRAM_PER_SHOT = BEANS_GRAM_PER_SHOT;
      this.#coffeeBeans = coffeeBeans * this.#BEANS_GRAM_PER_SHOT;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.#coffeeBeans < this.#shots * this.#BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.#coffeeBeans -= this.#shots * this.#BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const espressoMachine = new CoffeeMachine(2, 3, 7);

  const coffee = espressoMachine.makeCoffee(2);
  console.log(coffee);
}
