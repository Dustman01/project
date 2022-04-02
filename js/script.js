"use strics";
let NumberOnFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
let PersonalMuvieDB = {
    count: NumberOnFilms,
    muvies: {},
    actors: {},
    genres: {},
    privat: false
};
let a = prompt("Один из последних просмотренных фильмов?",""),
    b = prompt("На сколько оцените его?"),
    c = prompt("Один из последних просмотренных фильмов?",""),
    d = prompt("На сколько оцените его?");
PersonalMuvieDB.muvies[a] = b;
PersonalMuvieDB.muvies[c] = d;

console.log(PersonalMuvieDB);