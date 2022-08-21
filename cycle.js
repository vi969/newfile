//Задания на использование циклов и условий
// Место для первой задачи
// function firstTask() {
//    // Пишем решение вот тут
//    for (let i = 5; i < 11; i++) {
//       console.log(i);
//    }
// }


// // Место для второй задачи
// function secondTask() {
//    // Пишем решение вот тут
//    let num = 20;
//    while (num > 9) {
//       console.log(num--);
//       if (num === 12) {
//          break;
//       }
//    }
// }

// // Место для третьей задачи
// function thirdTask() {
//    // Пишем решение вот тут
//    let num = 2;
//    while (num < 11) {
//       if (num % 2 === 0) {
//          console.log(num);
//       }
//       num++;
//    }
// }

// // Место для четвертой задачи

// // Цикл, который нужно переписать:



// function fourthTask() {
//    // Пишем решение вот тут
//    let num = 2;
//    while (num <= 16) {
//       if (num % 2 != 0) {
//          console.log(num);
//       }
//       num++;
//    }

// }

// // Место для пятой задачи

// function fifthTask() {
//    const arrayOfNumbers = [];

//    // Пишем решение вот тут
// let index = 0;
// for(let i = 5;i < 11;i++){
//    arrayOfNumbers[index] = i;
//    index++;
// }
//    // Не трогаем
//    return arrayOfNumbers;
// }

//--------------------------------------------------------------------------
// (*) Продвинутые задания на использование циклов и условий:
// Место для первой задачи
function firstTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const arr = [3, 5, 8, 16, 20, 23, 50];
   const result = [];

   // Пишем решение вот тут
   for (let i = 0; i < arr.length; i++) {
      result[i] = arr[i];
   }

   // Не трогаем
   return result;
}

let out = firstTask();
console.log(out);


// Место для второй задачи
function secondTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const data = [5, 10, 'Shopping', 20, 'Homework'];

   // Пишем решение вот тут
   for (let i = 0; i < data.length; i++) {
      if (typeof data[i] === 'number') {
        data[i] *= 2;
      }else{
         data[i] = `${data[i]} - done`;
      }
   }

   // Не трогаем
   return data;
}
let out2 =  secondTask();

console.log(out2);

// Место для третьей задачи
function thirdTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const data = [5, 10, 'Shopping', 20, 'Homework'];
   const result = [];

   // Пишем решение вот тут
   let num = 1;
for(let i = 0;i < data.length;i++){
   result[i] = data[data.length - num];
   num++;
}

   // Не трогаем
   return result;
}
let out3 = thirdTask();
console.log(out3);