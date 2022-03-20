const baseURL = "https://api.themoviedb.org";

export const imageUrl = "https://image.tmdb.org/t/p/w500";

export const searchUrl = (text, page) => {
  return `${baseURL}/3/search/multi?api_key=${process.env.TMDB_API_KEY}&language=ja&query=${text}&page=${page}&include_adult=true`;
};

export const getMovieUrl = (id) => {
  return `${baseURL}/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=ja&append_to_response=watch/providers`;
};

export const getTvUrl = (id) => {
  return `${baseURL}/3/tv/${id}?api_key=${process.env.TMDB_API_KEY}&language=ja&append_to_response=watch/providers`;
};
