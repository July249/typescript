// Encapsulation
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 은닉화를 위한 설정
  // public
  // private: 외부에서 절대로 볼 수 없고, 접근할 수 없음
  // protected: 외부에서는 접근할 수 없지만, 상속한 자식 클래스에서만 접근이 가능하도록 할 수 있음
  // 별도의 설정을 하지 않으면 public으로 지정됨

  class CoffeeMachine {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level에서만 사용됨 => object마다 생성되거나 사용되지 않음 => 메모리 낭비가 없음
    private coffeeBeans: number = 0; // instance (object) level에서 사용됨

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // class 내부의 어떠한 속성값도 필요하지 않음
    // new CoffeeMachine으로 하지 않아도 instance를 생성할 수 있음
    // => object를 만들 수 있는 메서드를 제공하므로 constructor를 직접 동작시킬 필요가 없음
    // => 따라서 constructor에 private를 붙여 주는 것이 좋음
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    // coffeeBeans에 대한 값에 접근할 수 없도록 하고
    // 대신 fillCoffeeBeans 메서드로 접근이 가능하도록 함
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

  // const espressoMachine = new CoffeeMachine(32); // => constructor를 이용한 생성이 불가능 => 다른 메서드가 있는지 확인하게 됨
  const espressoMachine = CoffeeMachine.makeMachine(32);
  // console.log(espressoMachine.coffeeBeans); // Property 'coffeeBeans' is private and only accessible within class 'CoffeeMachine'

  // espressoMachine.coffeeBeans = 3;
  // espressoMachine.coffeeBeans = -34; // 직접 접근해서 수정할 수가 있음! => 은닉화 해야함!
  // console.log(espressoMachine); // CoffeeMachine { coffeeBeans: -34 }
}
