import axios from 'axios';
import { RoomInput } from '../interfaces/room';

// export function getAllRooms(): Promise<AxiosResponse> {
//   return axios.get('/rooms');
// }

export const getAllRooms = () => {
  return axios.get('/rooms');
}

export const addRoom = (data: RoomInput) => {
  return axios.post('/rooms', data);
}

export const updateRoom = (id: string, data: RoomInput) => {
  return axios.put(`/rooms/${id}`, data);
}

export const deleteRoom = (id: string) => {
  return axios.delete(`/rooms/${id}`);
}