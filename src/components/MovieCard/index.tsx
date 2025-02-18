import Image from "next/image";
import { Movie } from "@/types";

export interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  return (
    <li className="movie-card">
      <p className="title">{movie.title}</p>
      <p className="description">{movie.overview}</p>

      <Image
        src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "/fallback.jpg"}
        alt={movie.title || "Sem título"}
        width={300}
        height={450}
        priority
      />

      <p>{movie.vote_average ?? "N/A"}</p>
    </li>
  );
}
