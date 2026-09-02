import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <h1>🎬 Filmklubben</h1>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            Hem
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Om oss
          </NavLink>
          {/*
            TODO 2: Lägg till två <NavLink>-element här, ett till "/"
            och ett till "/about".

            NavLink fungerar som Link, men vet automatiskt om länken
            pekar mot sidan som visas just nu. Använd det för att ge
            den aktiva länken klassen "active" (se src/index.css):

              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Hem
              </NavLink>

            Fundera på: "/" matchar även när man står på en filmsida
            (t.ex. "/movies/3"), eftersom "/" är en del av den vägen.
            Hur kan du få NavLink att bara vara aktiv på EXAKT "/"?
            (Ledtråd: en extra prop på NavLink som heter "end")
          */}
        </nav>
      </header>

      <main>
        {
          <Outlet />

          /*
          TODO 3: Rendera <Outlet /> här. Det är platsen där React
          Router ritar ut den route som just nu matchar URL:en
          (Home, MovieDetail, About eller NotFound).
        */
        }
      </main>
    </div>
  );
}
