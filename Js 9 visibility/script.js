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

//область видимости

let menu = 0;
for (let i = 0; i < food.length; i++) {
    food[i].cost = 0;
    for (let j = 0; j < food[i].ingredients.length; j++) {
      const i2 = food[i].ingredients[j];
      food[i].cost += FoodPrice[i2];
    }
    food[i].profit = food[i].price - food[i].cost;
    let t1 = `Пицца с Грушей и Горгонзолой - неклассическая пицца с необычной начинкой.`;
    let t2 = `Ролл Филадельфия - нежное сочетание классических ингредиентов, изысканный вкус и натуральная польза.`
    let t3 = `Буузы - это традиционное бурятское блюдо, внешне напоминающее юрту. Мясная сочная начинка в упругом тонком тесте.`
  menu = `Меню включает в себя три блюда.` + ` ` + t1 + ` `+ t2 + ` `+ t3;
};
console.log (menu);







