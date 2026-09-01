import { Link, useParams } from "react-router-dom";
import { movies } from "../data/movies.js";

export default function MovieDetail() {
  // TODO 5: Hämta ut movieId från URL:en med hooken useParams().
  // Namnet du får ut motsvarar det du skrev i routen i main.jsx
  // (":movieId").
  //
  // const { movieId } = useParams();

  // TODO 6: Hitta rätt film i "movies"-arrayen som matchar movieId.
  // OBS: useParams() ger dig alltid en STRÄNG, men movie.id i
  // datafilen är ett NUMBER. Du måste alltså konvertera en av dem
  // för att jämförelsen ska bli sann, t.ex. med Number(movieId).
  //
  // const movie = movies.find((m) => m.id === Number(movieId));

  // TODO 7: Om ingen film hittas (movie är undefined), rendera ett
  // enkelt felmeddelande istället för att appen kraschar, t.ex:
  //
  // if (!movie) {
  //   return (
  //     <div>
  //       <p>Hittade ingen film med det id:t.</p>
  //       <Link to="/" className="back-link">← Tillbaka till alla filmer</Link>
  //     </div>
  //   );
  // }

  return (
    <div>
      {/*
        Rendera filmens detaljer här när du har löst TODO 5-7 ovan,
        t.ex. titel, år, genre, bild och beskrivning:

        <div className="detail">
          <img src={movie.image} alt={movie.title} />
          <div>
            <h2>{movie.title}</h2>
            <p className="meta">{movie.year} · {movie.genre}</p>
            <p>{movie.description}</p>
          </div>
        </div>
      */}

      <Link to="/" className="back-link">
        ← Tillbaka till alla filmer
      </Link>
    </div>
  );
}
