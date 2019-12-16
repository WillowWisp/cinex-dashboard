import axios from 'axios';
import { GenreInput } from '../interfaces/genre';

// export function getAllGenres(): Promise<AxiosResponse> {
//   return axios.get('/genres');
// }

export const getAllGenres = () => {
  return axios.get('/genres');
}

export const addGenre = (data: GenreInput) => {
  return axios.post('/genres', data);
}