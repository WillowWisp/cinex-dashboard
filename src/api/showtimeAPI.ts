import axios from 'axios';
import { ShowtimeInput } from '../interfaces/showtime';

// export function getAllShowtimes(): Promise<AxiosResponse> {
//   return axios.get('/showtimes');
// }

export const getAllShowtimes = () => {
  return axios.get('/showtimes');
}

export const addShowtime = (data: ShowtimeInput) => {
  return axios.post('/showtimes', data);
}

export const updateShowtime = (id: string, data: ShowtimeInput) => {
  return axios.put(`/showtimes/${id}`, data);
}

export const deleteShowtime = (id: string) => {
  return axios.delete(`/showtimes/${id}`);
}