// Inheritance
{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;
    // 1. 상속을 확인하기 위해 임시로 public으로 설정한다.
    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    // 2. 상속에서 접근이 가능하도록 하기 위해 private에서 protected로 변경한다.
    // protected constructor(coffeeBeans: number) {
    //   this.coffeeBeans = coffeeBeans;
    // }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log('Cleaning the machine ... 🧼');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preHeat(): void {
      console.log('Heating up... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots ... ☕️`);

      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preHeat();

      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk ... 🥛');
    }
    // CoffeeMachine에는 없는 기능을 추가하는 makeCoffee API 제작 => over-writing
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // 기본적인 과정은 동일하므로 그대로 상속
      this.steamMilk(); // 우유만 추가함
      return { ...coffee, hasMilk: true };
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    getSugar() {
      console.log('Getting some sugar... 🍬');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.getSugar();
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log('Steaming some milk ... 🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class AutomaticSugarMixer {
    private getSugar() {
      console.log('Getting some sugar from candy 🍭');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class SweetLatteMachine extends CoffeeMachine {}
}
