const apples = 20;
const oranges = 30;
const fruits = apples === oranges ? "true" : "false";

console.log(fruits);

console.log("-------------------------------------------------------");

const fruits1 = apples != oranges ? "true" : "false";

console.log(fruits1);

console.log(apples > oranges);
console.log(apples <= oranges);
console.log("5 ", oranges > apples);

const mangoes = 5;
const fruits2 = mangoes * apples;
const fruits3 = mangoes + oranges;

console.log(fruits2 > fruits3);

const fruit4 = apples - mangoes;
const fruit5 = oranges / mangoes;

console.log(fruit4 < fruit5);

const fruit6 = (apples == oranges) == mangoes ? "true" : "false";

console.log(fruit6);

console.log(apples % mangoes == oranges % mangoes);

const fruit7 = apples + mangoes;
const fruit8 = oranges - mangoes;
const fruit9 = fruit7 > fruit8;

console.log(
  "Is apples plus mangoes greater than oranges minus mangoes ",
  fruit9
);

const firstName = "Cat";
let x = "Giraph";

console.log(x);
console.log(firstName);
x = "Tic";
x = "Tac";
x = "Toe";
console.log(x);

const string = "Hello";

console.log(string);

const emptyObject = {};
const object1 = {
  name: "kirk",
  lastname: "McDowell",
};
console.log(object1);

const array = [];

const array1 = ["1", "2", "3", "4", "5"];
console.log(
  "The 1st 2nd and 3rd items  in my array are",
  array1[0],
  array1[1],
  array1[2]
);
