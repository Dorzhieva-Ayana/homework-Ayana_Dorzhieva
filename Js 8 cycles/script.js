//1. все четные числа в промежутке от 1 до 10.

for (let a = 1; a <= 10; a++) {
    if (a % 2 == 0)   { console.log (a);}
}

//2. прервать бесконечный цикл на 5 итерации
let b = 1;

while (true) {
    console.log (b);
    if (b==5) { break; }
    b++
}

//3. посчитать себестоимость и выручку с помощью цикла



let Pizza = {
    name: `Pizza`,
    price: 1990,
    ingredients: [`тесто`, `груша`, `сыр`, `грецкийОрех`] };


let Roll = {
    name: `Roll`, 
    price: 2190,
    ingredients: [`нори`, `сыр`, `рис`, `огурец`, `лосось`] };


let Buuza = {
    name: `Buuza`,
    price: 140,
    ingredients: [`тесто1`, `фаршДомашний`] };

let food = [Pizza, Roll, Buuza];

const FoodPrice = {
    тесто: 100,
    груша: 200,
    сыр: 600,
    грецкийОрех: 90,
    нори: 10,
    сыр1: 200,
    рис: 150,
    огурец: 30,
    лосось: 400,
    тесто1: 10,
    фаршДомашний: 30
};

// себестоимость и профит блюд

for (let i = 0; i < food.length; i++) {
    food[i].cost = 0;
    for (let j = 0; j < food[i].ingredients.length; j++) {
      const i2 = food[i].ingredients[j];
      food[i].cost += FoodPrice[i2];
    }
    food[i].profit = food[i].price - food[i].cost;
console.log (`себестоимость ${food[i].name} = ${food[i].cost};`)
console.log(`Профит ${food[i].name} = ${food[i].profit}`);
  };
