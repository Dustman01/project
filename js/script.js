"use strics";

//import Sum from 'sum.js';

let NumberOnFilms;
let PersonalMuvieDB = {
    count: NumberOnFilms,
     muvies: {},
     actors: {},
     genres: [],
     privat: true,
     toggleVisibleMyDB: function(){
        if(PersonalMuvieDB.privat){
            PersonalMuvieDB.privat = !PersonalMuvieDB.privat;
        }
        else{
            PersonalMuvieDB.privat = !PersonalMuvieDB.privat;
        }
     },

    writeYourGenres: function(){
        let gener;
        for(let i = 1; i <= 3; i++){
            gener = prompt(`Ваш любимый жанр под номером ${i}`,"");
            while(gener == '' || !isNaN(gener) || gener == null){
                gener = prompt(`Данные не верны, Ваш любимый жанр под номером ${i}`,"");
            }
            PersonalMuvieDB.genres[i-1] = gener;
        }
        PersonalMuvieDB.genres.forEach(function(item, i){
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },

    showMyDB: function(){
        if(!PersonalMuvieDB.privat){
            return PersonalMuvieDB;
        }
    },

     detectedPersonalLevel: function(){
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
    },
     remembarMyFilms: function(){
        for(let i = 1; i < 3; i++){
            let a = prompt("Один из последних просмотренных фильмов?","");
             while(a == '' || a.length > 50){
                 a = prompt("Поле не должно быть пустым","");
             }
             let b = +prompt("На сколько оцените его?","");
             while(b == '' || b.length > 50){
                 b = +prompt("Поле не должно быть пустым?","");
             }
             PersonalMuvieDB.muvies[a] = b;
        }
    },

     start: function(){
        NumberOnFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
        while(NumberOnFilms == '' || isNaN(NumberOnFilms) || NumberOnFilms == null){
            NumberOnFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
        }
    }
};

//PersonalMuvieDB.writeYourGenres();
// console.log(PersonalMuvieDB.showMyDB());



// start();
// remembarMyFilms();
// detectedPersonalLevel();
//writeYourGenres();
// //console.log(PersonalMuvieDB);


// function fun(){
//     console.log('fun');
// }


// function fun2(){
//     setTimeout(fun, 1000);
// }

// function fun3(){
//     console.log('fun3');
// }

// function test(callback, callback2){
//     callback();
//     callback2();
// }

// test(fun2, fun3);



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

let obj ={
    width: "32px",
    top: "32px",
    high: "64px",
    button: {
        color:"whit",
    },
    getColor(){
        console.log("color");
    }
};

// obj.getColor();

// for(let key in obj){
//     if(typeof(obj[key]) === 'object'){
//         for(let i in obj[key]){
//             console.log(`${i} => ${obj[key][i]}`);
//             console.log("i am here");
//         }
//     }
//     else{
//          console.log(`${key} => ${obj[key]}`);
//     }
// }

// const {color} = obj.button;

// console.log(color);

// const solder = {
//     helth:  "400",
//     armor: "100"
// };

// const Jhon = Object.create(solder);
// const Rik = {};
// console.log(Jhon.armor);

// Object.setPrototypeOf(Rik, Jhon);
// console.log(Jhon.helth);
// const logger = () => {
//     console.log('анонимная функция js');
// };
// logger();



// console.log(db);
// const setPost = (post, time = Date()) => (
//      {
//         ...post,
//         time,
//     });
// db = setPost(db);
//  console.log(db);


// function fn(){
//     throw new Error('same error');
// }

// try{
//     fn();
// } catch(error){
//     console.log(error.massage);
//     console.error(error);
//     console.log("continue...");
// }
// console.log("continue");

// function fn(add,obj){
//     Object.assign(obj, add);
// }

// let a = {
//     text: "same text"
// };
// fn(a, db);

// console.log(db);

// const array = [1,2,3,4];

// const array2 = array.map(el => el*2);

// console.log(array2);



// function fn({id, user}){
//     if (user){
//         return user;
//     }
// }

// console.log(fn(db));


// function bool(a, b){
//     console.log(typeof a);
//     if(typeof a === 'number' && typeof b === 'number'){
//         console.log("Все переменные числа");
//     }
// }

// bool(5,7);


// const val = 1;

// switch(val){

//     case(7): console.log(`число ${val} равно 7`);
//             break;
//     case(5): console.log(`число ${val} равно 5`);
//         break;
//     default: {
//         console.log(`в списке нет такого числа`);
//     }
// }

let db = {
    id: 1,
    user: "Boris",
    massage: "Same text"
};

// Object.keys(db).forEach(key =>{
//     console.log(key);
// });

// for(let key in db){
//     console.log(key);
// }

// function fn(){
//     return j+j;
// }

// try{
//     fn();
// } catch(error){
//    // console.log(error.massage);
//     console.error('error.massage');
// }

 console.log('continue');

// const sum = new Sum('сумма двух чисел');
// sum.showText();
//Sum();

// const array = [5, 8, 1];

// let r = array.map(val => val+5);
// console.log(r);

// const getData = (url) =>
//     new Promise((resolve, reject) => 
//         fetch(url)
//             .then(response => response.json())
//             .then(json => resolve(json))
//             .catch(error => reject(error))
//     );
// getData('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => console.log(data))
//     .catch(error => console.log(error));




// const getData = url =>
//     new Promise((resolve, reject) =>
//     fetch(url)
//     .then(response => response.json())
//     .then(json => resolve(json))
//     .catch(error => reject.error)
//     );

//     getData('https://jsonplaceholder.typicode.com/todos/5')
//         .then(data => console.log(data))
//         .catch(error => console.log(error));





// async function fn(){
//     return 'асинхронная функция';
// }

// fn()
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// const fn2 = async () => {throw new Error('ошибка асинхронной функции');};

// fn2()
//     .then(data => console.log(data))
//     .catch(error => console.log(error.massage));





const myPromise = new Promise((resolve, reject) =>{
    fetch('https://jsonplaceholder.typicode.com/todos/5')
        .then(response => response.json())
        .then(json => console.log(json))
        .cetch(error => console.log(error));
});


myPromise
    .then(value =>{

    })
    .catch(error => {

    });



