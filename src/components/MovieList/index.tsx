"use client";

import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "@/types";
import MovieCard from "@/components/MovieCard";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/discover/movie", {
          params: {
            api_key: "52a3b76d644b5e272ff3f1bcbab29400",
            language: "pt-BR",
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    getMovies();
  }, []);

  return (
    <div className="container">
      <ul className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
