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
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkForther: CheapMilkSteamer
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkForther.makeMilk(coffee);
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(private beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
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

  // 위임을 이용하면 CheapMilkSteamer과 AutomaticSugarMixer 클래스와 스파게티처럼 꼬인다.
  // 클래스는 꼬이지 않게 만드는 것이 중요하다! => 현재 코드는 냄새가 난다!
  class SweetLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: CheapMilkSteamer,
      private sugar: AutomaticSugarMixer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '12'),
    new SweetCoffeeMachine(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '12'),
    new SweetCoffeeMachine(16),
  ];

  machines.forEach((machine) => {
    console.log('-----------------------------------');
    machine.makeCoffee(1);
  });
}
