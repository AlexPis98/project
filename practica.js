const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');

const presonalMovieDB = {
count: numberOfFilms,
movies: {},
actros: {},
genres: [],
privat: false

};

const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('На сколько оцените его', ''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('На сколько оцените его', '');

      presonalMovieDB.movies[a] = b;
      presonalMovieDB.movies[c] = d;

      console.log(presonalMovieDB);