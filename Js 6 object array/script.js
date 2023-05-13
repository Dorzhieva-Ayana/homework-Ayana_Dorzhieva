 
let Pizza = {
        ingredient1: `тесто`,
        price1: 100,
        ingredient2: `груша`,
        price2: 200,
        ingredient3: `сыр`,
        price3: 600,
        ingredient4: `грецкий орех`,
        price4: 90
    };
let Roll = {
        ingredient1: `нори`,
        price1: 10,         
        ingredient2: `сыр`, 
        price2: 200, 
        ingredient3: `рис`, 
        price3: 150,
        ingredient4: `огурец`, 
        price4: 30,
        ingredient5: `лосось`, 
        price5: 400
    };
let Buuza = {
        ingredient1: `тесто`, 
        price1: 10, 
        ingredient2: `фарш домашний`, 
        price2: 30,
    };

let food = [Pizza, Roll, Buuza];
alert(food.length);
console.log (food);

//3.удаляем одно блюдо
food.pop();
console.log (food);

//4.добавляем это блюдо на 1 место, удаляем один ингредиент
food.unshift (Buuza);
delete Buuza.ingredient1;
console.log (Buuza.ingredient1);
console.log (food);

//5.Затраты
let costPizza = (Pizza.price1) + (Pizza.price2) + (Pizza.price4) + (Pizza.price4);
console.log (costPizza);

let costRoll = (Roll.price1) + (Roll.price2) + (Roll.price4) + (Roll.price4);
console.log (costRoll);

let costBuuza = (Buuza.price1) + (Buuza.price2);
console.log (costBuuza);

//5.Цена в меню
let pricePizza = (costPizza) + (costPizza) * 70 / 100
console.log (pricePizza);

let priceRoll = (costRoll) + (costRoll) * 70 / 100
console.log (priceRoll);

let priceBuuza = (costBuuza) + (costBuuza) * 70 / 100
console.log (priceBuuza);

//6.Прибыль
let cashPizza = (pricePizza) - (costPizza);
console.log (cashPizza);

let cashRoll = (priceRoll) - (costRoll);
console.log (cashRoll);

let cashBuuza = (priceBuuza) - (costBuuza);
console.log (cashBuuza);

//7.Удаляем из массива все элементы кроме одного
food.splice (0,2);
console.log (food);

