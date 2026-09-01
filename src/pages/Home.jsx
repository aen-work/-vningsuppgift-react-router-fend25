import { Link } from "react-router-dom";
import { movies } from "../data/movies.js";

export default function Home() {
  return (
    <div>
      <h2>Alla filmer</h2>
      <ul className="movie-list">
        {/*
          TODO 4: Loopa igenom "movies" med .map() och rendera en
          <li> med en <Link> per film.

          - Länken ska peka till /movies/<filmens id>
          - Visa filmens titel (och gärna år/genre) i kortet
          - Glöm inte "key"-propen på det yttersta elementet i loopen!

          Exempel på ett kort (du bestämmer själv exakt HTML/klasser,
          men "movie-card" och "movie-card-info" finns redan
          stylade i index.css om du vill återanvända dem):

            <li key={movie.id}>
              <Link className="movie-card">
                <img src={movie.image} alt={movie.title} />
                <div className="movie-card-info">
                  <h3>{movie.title}</h3>
                  <p>{movie.year} · {movie.genre}</p>
                </div>
              </Link>
            </li>
        */}
      </ul>
    </div>
  );
}
