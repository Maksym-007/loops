//№1

// let i;
// do {
//   i = prompt('Введите число больше 100');
// }
// while (i <= 100 && i);

//№2

for (let i = 2; i < 9; i++) {
  if (i % 2) {
    console.log(i);
  }
}

//№3

// let i = 10;
// while (i > 0) {
//   console.log(i);
//   --i;
// }

//Задача на угадывание!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//  Do While!

// let vic = Math.floor(Math.random() * (10 - 1) + 1);
// console.log(vic);
// let ask;

// do {
//   ask = prompt('загадай число от 0 до 10');
// } while (ask && ask != vic);

// if (ask) {
//   alert('вы угадали!');
// } else {
//   alert('Вы вышли из игры!');
// }

// While!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let vic = Math.floor(Math.random() * (10 - 1) + 1);
// console.log(vic);
// let ask = true;
// while (ask && ask != vic)
//   ask = prompt('загадай число от 0 до 10');
// if (ask) {
//   alert('вы угадали!');
// } else {
//   alert('Вы вышли из игры!');
// }

//for!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let vic = Math.floor(Math.random() * (10 - 1) + 1);
// console.log(vic);
// let ask = true
// for (; ask != vic;) {
//   ask = prompt('загадай число от 0 до 10')
//   if (ask == vic) {
//     alert('You win!');
//   } else if (!ask) {//пустая строка
//     alert('Вы вышли из игры!');
//   }
// }

//Задача на кратное число!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//№1

// let a = prompt('введи число');
// for (let i = a; i <= 100; i++) {
//   if (i % a == 0)
//     console.log(i);
// }

//№2

// let a = prompt('введи число'),
//   i = a;
// while (i <= 100) {
//   if (i % a === 0)
//     console.log(i);
//   i++;
// };

//№3

// let a = prompt('введи число'),
//   b = prompt('Сколько итераций применить?'),
//   c = b * a,
//   i = a;
// do {
//   if (i % a === 0)
//     console.log(i);
//   i++;
// } while (i <= c);

