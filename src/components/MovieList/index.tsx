import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            api_key: '52a3b76d644b5e272ff3f1bcbab29400',
            language: 'pt-BR'
          }
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar os filmes:", error);
      }
    };

    getMovies();
  }, []);

  return (
    <div className="movie-container">
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-card">
            <p className="title">{movie.title}</p>
            <p className="description">{movie.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
