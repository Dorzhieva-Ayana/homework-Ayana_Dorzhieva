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
    
console.log (Pcost);

//себестоимость роллов

let Rcost = 0;
        for (let i = 0; i < Roll.ingredients.length; i++) {
         const i3 = Roll.ingredients [i];
          Rcost += FoodPrice[i3];
        }
    
console.log (Rcost);

//себестоимость Бууз
let Bcost = 0;
        for (let i = 0; i < Buuza.ingredients.length; i++) {
         const i4 = Buuza.ingredients [i];
          Bcost += FoodPrice[i4];
        }
    
console.log (Bcost);


// выручка 
let PProfit;
for (let i = 0; i <= Pizza.price; i++) {
PProfit = Pizza.price - Pcost;
}
console.log (PProfit);

let RProfit;
for (let i = 0; i <= Roll.price; i++) {
RProfit = Roll.price - Rcost;
}
console.log (RProfit);

let BProfit;
for (let i = 0; i <= Buuza.price; i++) {
BProfit = Buuza.price - Bcost;
}
console.log (BProfit);





