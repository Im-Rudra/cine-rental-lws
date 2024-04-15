const getData = () => import('./database.json').then((module) => module.default);

export const getAllMovies = async () => {
  const movies = await getData();
  const serialzedMovies = movies.map((m) => {
    const newMovie = {
      id: m.id,
      title: m.title,
      poster_path: m.poster_path,
      vote_average: m.vote_average,
      vote_count: m.vote_count,
      release_date: m.release_date
    };
    return newMovie;
  });
  return serialzedMovies;
};

export const getMovieById = async (id) => {
  const movies = await getData();
  const movie = movies.find((m) => m.id === Number(id));
  return movie;
};
