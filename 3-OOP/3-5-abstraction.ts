// Abstraction, Interface
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 규약사항을 작성함
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
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

    // interface를 구현하는 함수를 작성해야 문제가 안생김
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preHeat();

      return this.extract(shots);
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);

  amateur.makeCoffee();
  // grinding beans for 2
  // Heating up... 🔥
  // Pulling 2 shots ... ☕️
  // { shots: 2, hasMilk: false }
  pro.makeCoffee();
  //   grinding beans for 2
  // Heating up... 🔥
  // Pulling 2 shots ... ☕️
  // { shots: 2, hasMilk: false }
  // Cleaning the machine ... 🧼

  // point
  // 동일한 object의 instance일지라도 두 가지의 Interface를 가지고 있기 때문에
  // class 보다 좁은 범위의 interface에서 규약된 API만 사용할 수 있게 된다.
}

// [캡슐화와 추상화]

// 고양이의 내부 상태 (배고프고, 즐겁고, 기분좋고, 잠오고) 이런것들은 외부에서 설정할 수 있는게 아니예요. 그쵸?

// 외부에서 함부로 설정할 수 없는 것들을 private와 같은 접근 제어자를 써서 외부에서 볼 수 없도록 만드는것을 정보 은닉, 캡슐화라고 해요.

// 외부에서 접근이 가능하고, 해도 되고, 필요한 것들만 노출하는것도 정보 은닉, 캡슐화라고 해요 :)

// 여기서 고양이와 놀아주다 (play)같은 함수만 외부에 노출하는것을 (public으로 설정) 캡슐화라고 해요.

// 자, 이런 함수를 외부에서 호출이 가능하도록 만든다고 해서 추상화라고 하지는 않아요.

// 추상화란, 외부에서 어떤 형태로, 공통적으로 어떻게 이 클래스를 이용하게 할것인가... 이걸 고민하는 단계예요.

// 아, Cat 고양이는 Play라는 함수가 있어. 그리고 모든 동물 Animal과 놀아 줄 수 있어. 그러니깐 Animal 이라는 부모 클래스를 만들어서 play를 할수 있도록 만들어야지!

// class Animal {
//     play() {}
// }

// class Cat extends Animal { }

// 이렇게 상속을 통해 추상화를 할 수도 있죠 :)

// 그러면 동물을 상속하는 모든 동물들은 다 놀아 줄 수 있는 동물일까요?

// 조금 잘못된 추상화 같나요? 그러면 또 이렇게 추상화를 해볼 수 있어요

// 아, 놀아 줄 수 있는 동물 클래스들이 공통적으로 따라야 하는 함수, 인터페이스는 무엇이 있을까? 아하! Playable 이라는 인터페이스를 만들자

// interface Playable {
//     play();
// }

// 이제 이 인터페이스를 구현하는 클래스들은 다 놀아줄 수 있는 클래스야!

// class Cat implements Playable {
//     play() {
//        console.log("재밌게 놀아요옹🐱")
//     }
// }

// class Dog implements Playable {
//     play() {
//        console.log("재밌게 놀아요멍🐶")
//     }
// }

// 아하! Cat이랑 Dog랑 놀아줄 수 있는 친구들이군!

// class Tiger {

// }

// 아뉘, Tiger는 Playable 인터페이스를 구현하지 않았네!
// 놀아줄 수 없는 클래스구나!

// 이런식으로 외부에서 어떻게 이 클래스를 사용할 수 있는지,
// 인터페이스나 다른 부모 클래스를 통해 공통적인 기능들을 추출하는 이런 작업들을 추상화라고 볼 수 있어요 💡

// 제 설명이 도움이 되셨으면 좋겠네요 ;)
