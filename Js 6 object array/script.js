
let Pizza = {
        name: `Пицца с грушей и горгонзолой`,
        ingredients: `тесто, сыр Горгонзола, груша`, 
        price: 1000,
        size: `35 cm`       
    };
let Roll = {
        name: `рол Филадельфия`,
        ingredients: `нори, сыр Филадальфия, рис, огурец, лосось`, 
        price: 750,
        weight: `500 grams`
    };

let Buuza = {
        name: `Буузы`,
        ingredients: `тесто, домашний фарш`, 
        price: 90,
        weight: `70 grams`
    };

const food = [Pizza, Roll, Buuza];
alert(food.length);
console.log (food);

//3.удаляем одно блюдо
food.pop ();
console.log (food[2]);

//4.добавляем это блюдо на 1 место, удаляем одно его свойство
food.unshift (Buuza);
delete Buuza.price;
console.log (food);

//5.Затраты на все 3 блюда.Цена за все 3 блюда.
console.log (1000+750+90); //1840
console.log (1840 / 70 * 100); //2628,57..
let mprice = Math.floor (2628,57)
console.log (mprice);

//6.Прибыль с 3 блюд
console.log (2628 - 1840);


//7.Удаляем из массива все элементы, кроме одного
food.splice (0,2);
console.log (food);
