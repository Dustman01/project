"use strics";
let NumberOnFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
let PersonalMuvieDB = {
    count: NumberOnFilms,
     muvies: {},
     actors: {},
     genres: {},
     privat: false
};
for(let i = 1; i < 3; i++){
    let a = prompt("Один из последних просмотренных фильмов?","");
     while(a == '' && a.length > 50){
         a = prompt("Поле не должно быть пустым","");
     }
     let b = +prompt("На сколько оцените его?","");
     while(b == '' && b.length > 50){
         b = +prompt("Поле не должно быть пустым?","");
     }
     
     PersonalMuvieDB.muvies[a] = b;
}

console.log(PersonalMuvieDB);

if(PersonalMuvieDB.count < 10){
    document.write("Просмотрено довольно мало фильмов");
}
 else if(PersonalMuvieDB.count >= 10 || PersonalMuvieDB.count <= 30){
    document.write("Вы классический зритель");
}
else if(PersonalMuvieDB.count > 30){
    document.write("Вы киноман");
}
else{
    document.write("Произошла ошибка");
}

// //console.log(PersonalMuvieDB);


//  let num = 17;

// // (num>=6)? document.write('if'): document.write('?');

// switch(num===17){
//     case 5: document.write(`число ${num} больше 5`);
//              break;
//     case 6: document.write(`число ${num} больше 6`);
//             break;
//     default: document.write(`число ${num} равно 17`);
//             break;
// }

// let i = 6;

// while(i>0){
//     console.log(i);
//     i--;
// }

// do{
//     console.log(i);
//     i--;
// }
// while(i>0);

// for(let i = 1; i < 10; i++){
//     for(let y = 1; y < 10; y++){
//         console.log(`${i} * ${y} = ` + i * y);
//     }
// }

// console.log(i);