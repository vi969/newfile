// Место для первой задачи
function firstTask() {
   // Пишем решение вот тут
   for (let i = 5; i < 11; i++) {
      console.log(i);
   }
}


// Место для второй задачи
function secondTask() {
   // Пишем решение вот тут
   let num = 20;
   while (num > 9) {
      console.log(num--);
      if (num === 12) {
         break;
      }
   }
}

// Место для третьей задачи
function thirdTask() {
   // Пишем решение вот тут
   let num = 2;
   while (num < 11) {
      if (num % 2 === 0) {
         console.log(num);
      }
      num++;
   }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:



function fourthTask() {
   // Пишем решение вот тут
   let num = 2;
   while (num <= 16) {
      if (num % 2 != 0) {
         console.log(num);
      }
      num++;
   }

}

// Место для пятой задачи

function fifthTask() {
   const arrayOfNumbers = [];

   // Пишем решение вот тут
let index = 0;
for(let i = 5;i < 11;i++){
   arrayOfNumbers[index] = i;
   index++;
}
   // Не трогаем
   return arrayOfNumbers;
}
