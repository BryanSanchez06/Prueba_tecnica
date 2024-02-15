export const LOAD_MOVIES = 'LOAD_MOVIES';
export const LOAD_SERIES = 'LOAD_SERIES';

export const loadMovies = (movies) => ({
  type: LOAD_MOVIES,
  payload: movies,
});

export const loadSeries = (series) => ({
  type: LOAD_SERIES,
  payload: series,
});
