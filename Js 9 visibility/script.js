
// посчитать себестоимость и выручку с помощью цикла

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

let food = [ Pizza, Roll, Buuza];


// себестоимость пиццы

let Pcost = 0;
        for (let i = 0; i < Pizza.ingredients.length; i++) {
         const i2 = Pizza.ingredients [i];
          Pcost += FoodPrice[i2];
        }
    

//себестоимость роллов

let Rcost = 0;
        for (let i = 0; i < Roll.ingredients.length; i++) {
         const i3 = Roll.ingredients [i];
          Rcost += FoodPrice[i3];
        };

//себестоимость Бууз
let Bcost = 0;
        for (let i = 0; i < Buuza.ingredients.length; i++) {
         const i4 = Buuza.ingredients [i];
          Bcost += FoodPrice[i4];
        };


// выручка 
let PProfit;
for (let i = 0; i <= Pizza.price; i++) {
PProfit = Pizza.price - Pcost;
};

let RProfit;
for (let i = 0; i <= Roll.price; i++) {
RProfit = Roll.price - Rcost;
};


let BProfit;
for (let i = 0; i <= Buuza.price; i++) {
BProfit = Buuza.price - Bcost;
};

//область видимости - локальные переменные
let P1Profit;
for (let i = 0; i <= Pizza.price; i++) {
PProfit = Pizza.price - Pcost;
let text = `Пицца с Грушей и Горгонзолой - неклассическая пицца с необычной начинкой.`;
console.log (text); };

let R1Profit;
for (let i = 0; i <= Roll.price; i++) {
RProfit = Roll.price - Rcost;
let text = `Ролл Филадельфия - нежное сочетание классических ингредиентов, изысканный вкус и натуральная польза.`
console.log (text);
};

let B1Profit;
for (let i = 0; i <= Buuza.price; i++) {
BProfit = Buuza.price - Bcost;
let text = `Буузы - это традиционное бурятское блюдо, внешне напоминающее юрту. Мясная сочная начинка в упругом тонком тесте.`
console.log (text);
};

// меню

let menu


