// Imperative and Procedural Programming (IPP)

const coffeeBean = 1000;

function makeCoffee(shots: number) {
  let density = 0;
  if (coffeeBean - 100 * shots >= 0) {
    density += (100 * shots) / 250;
    return density * 100;
  }
}

console.log(makeCoffee(1));
console.log(makeCoffee(2));
console.log(makeCoffee(3));
