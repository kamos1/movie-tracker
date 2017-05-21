export const cleaner = data => data.results.reduce((acc, val) => {
  if (!acc[val.title]) {
    acc[val.title] = {
      title: val.title,
      overview: val.overview,
      poster_path: `https://image.tmdb.org/t/p/w500${val.poster_path}`,
      movie_id: val.id,
      release_date: val.release_date,
      vote_average: val.vote_average,
    };
  }
  return acc;
}, {});
