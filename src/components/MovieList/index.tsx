import "./index.scss"
import { useEffect, useState } from "react";
import axios from "axios";

export interface MovieType {
  id: number;
  title: string,
  poster_path: string,
  overview: string,
  vote_average: number,
}


export default function MovieList() {

	const [movies, setMovies] = useState<MovieType[]>([]);

	useEffect(() => {
		getMovies();
	}, [])


	const getMovies = () => {
		axios({
			method: 'get',
			url: 'https://api.themoviedb.org/3/discover/movie',
			params: {
				api_key: '52a3b76d644b5e272ff3f1bcbab29400',
				language: 'pt-BR'
			}
		}).then(response => {
			setMovies(response.data.results);
      console.log(response)
		})
	}


	return (
		<div className="container">
			<ul className="movie-list">
				{movies.map((movie) =>

					<li key={movie.id} className="movie-card">

						<p className="title">
							{movie.title}
						</p>
						<p className="description">
							{movie.overview}
						</p>

            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title} />
            <p>
              {movie.vote_average}
            </p>


					</li>

				)}
			</ul>
		</div>
	)
}
