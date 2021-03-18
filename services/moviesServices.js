import axios from 'axios';

export async function getAllMovies(page = 1) {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=66761884169de3ece2a4b0a237febcf3&page=' + page
  );

  return data;
}
