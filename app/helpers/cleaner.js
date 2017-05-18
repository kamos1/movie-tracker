export const cleaner = data => data.results.reduce((acc, val) => {
  if (!acc[val.title]) {
    acc[val.title] = {
      title: val.title,
      synopsis: val.overview,
      poster: `https://image.tmdb.org/t/p/w500${val.poster_path}`,
      id: val.id,
    };
  }
  return acc;
}, {});
