import { Room } from "./room";
import { Movie } from "./movie";

export interface Showtime {
  id: string,
  room: Room,
  movie: Movie,
  status: string,
  startAt: string,
  endAt: string,
}

export interface ShowtimeInput {
  movieId: string,
  roomId: string,
  screenTypeId: string,
  startAt: string,
}