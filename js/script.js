"use strict";

//let firm = 100;
//console.log(firm);

//console.log(10);
//alert(100);


//let number = 5;
//let str = `tjem`;
//let und = 100;
//console.log(und);

/*const blll = false;
const leftBorderWight = 1;
console.log(number);
number = 120;
console.log(number); {
    let res = 300;
    console.log(res);
}

const objmy = {
    name: `Имя`,
    age: 45 ,
    isMarried: true 
};

console.log(objmy.name);
console.log(objmy [`age`]);
console.log(objmy.isMarried);

let arr = [`hdo.png`, `FHB.jpeg`, `ДКУ.bmp`,9];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
*/

let numberOfFilms;
numberOfFilms = +prompt('Сколько фильмов вы видели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB.count);
console.log(personalMovieDB.actors);

let lastFilm = prompt('Какой один из последних фильмов?', ''),
lastReitong = prompt('Оценка фильма?', ''),
lastFilm2 = prompt('Ещё какой один из последних фильмов?', ''),
lastReitong2 = prompt('Оценка фильма?', '');



personalMovieDB.movies[lastFilm] = lastReitong;
personalMovieDB.movies[lastFilm2] = lastReitong2;



console.log (personalMovieDB);


/*let movies = [];
movies [0] = lastFilm;
movies [1] = lastReitong;

lastFilm = prompt('Ещё какой один из последних фильмов?', '');
lastReitong = prompt('Оценка фильма?', '');
movies [2] = lastFilm;
movies [3] = lastReitong;

console.log (movies[0],movies[1],movies[2],movies[3]);
*/


