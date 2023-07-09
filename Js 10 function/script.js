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
let cost; 
for (let i = 0; i < food.length; i++) {
    food[i].cost = 0;
    for (let j = 0; j < food[i].ingredients.length; j++) {
      const k = food[i].ingredients[j];
      food[i].cost += FoodPrice[k];
    }
    food[i].profit = food[i].price - food[i].cost;
  };

// функция принимающая два числа и возвращающая меньшее из них

function numbers ( a = 743,b = 742) {
  if (a < b) {return a;}
            else {return b;}
}

// функция для рассчета профита

function profitOfFood (food, prices) {
  let cost = 0;
  for (let i = 0; i < food.ingredients.length; i++) {       
     cost += prices[food.ingredients[i]];
   }
   const profit = food.price - cost;
   return profit;
 };

Pizza.profit = profitOfFood (Pizza, FoodPrice);
Roll.profit = profitOfFood (Roll, FoodPrice);
Buuza.profit = profitOfFood (Buuza, FoodPrice);
console.log(Pizza.profit);
console.log(Roll.profit);
console.log(Buuza.profit);


for (dish of food) {
  dish.profit = profitOfFood (dish, FoodPrice);
  console.log(dish.profit);
}
