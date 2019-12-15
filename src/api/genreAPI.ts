import axios from 'axios';

// export function getAllGenres(): Promise<AxiosResponse> {
//   return axios.get('/genres');
// }

export const getAllGenres = () => {
  return axios.get('/genres');
}