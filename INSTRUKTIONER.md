# Övning: Routing med React Router v6.3 — Filmklubben

Man ska kunna göra följande i applikationen:

1. Se en lista med filmer på startsidan
2. Klicka på en film och komma till en detaljsida för just den filmen
3. Navigera mellan sidorna via en meny (Hem / Om oss)
4. Få en snygg 404-sida om man skriver in en URL som inte finns

Du behöver göra följande:

- Sätta upp routing med `<BrowserRouter>`, `<Routes>` och `<Route>`
- Bygga nästlade routes med ett gemensamt layout och `<Outlet />`
- Navigera med `<Link>` och `<NavLink>` (inklusive aktiv-styling)
- Läsa ut URL-parametrar med `useParams`
- Sätta upp en catch-all/404-route

Alla ställen du behöver fylla i är märkta med `TODO 1`, `TODO 2` osv. i
koden. Du hittar dem i:

- `src/main.jsx` — TODO 1
- `src/layouts/Layout.jsx` — TODO 2 och 3
- `src/pages/Home.jsx` — TODO 4
- `src/pages/MovieDetail.jsx` — TODO 5, 6 och 7

Gå igenom dem i den ordningen, det blir enklast så. Varje TODO har
instruktioner och kodexempel i kommentarerna — du behöver inte gissa dig
fram.

## Steg för steg

### Steg 1 – Bygg routträdet (`src/main.jsx`)

Använd `<Routes>` och `<Route>` för att beskriva vilka URL:er appen ska
känna till, och koppla samman dem med sidorna som redan finns:
`Layout`, `Home`, `MovieDetail`, `About` och `NotFound`.

`Layout` ska vara en "ram" runt alla andra sidor (den har menyn). De andra
sidorna läggs som **nästlade** `<Route>`-element inuti Layouts `<Route>`,
och den route som ska visas på exakt `/` markeras med `index` istället för
en egen `path`.

När steget är klart och du laddar om sidan ska du se menyn och
startsidans rubrik "Alla filmer" — men listan är fortfarande tom, det
löser vi i steg 4.

### Steg 2 – Navigeringen (`src/layouts/Layout.jsx`)

Lägg till `<NavLink>` för "Hem" (`/`) och "Om oss" (`/about`) i menyn.
Testa att klicka mellan dem och se att den aktiva länken markeras
(rödmarkerad understrykning).

### Steg 3 – Outlet (`src/layouts/Layout.jsx`)

Rendera `<Outlet />` i `<main>` så att sidorna faktiskt visas under
menyn.

### Steg 4 – Lista filmerna (`src/pages/Home.jsx`)

Loopa igenom `movies`-arrayen och rendera ett klickbart kort per film,
som länkar vidare till `/movies/<id>`.

### Steg 5–7 – Detaljsidan (`src/pages/MovieDetail.jsx`)

Läs ut `movieId` från URL:en med `useParams`, hitta rätt film i
`movies`-arrayen, och rendera dess information. Tänk på att
`useParams` alltid ger dig strängar!

Hantera även fallet att någon skriver in ett id som inte finns
(t.ex. `/movies/999`) utan att appen kraschar.

## Så vet du att du är klar

Gå igenom den här listan:

- [x] Startsidan visar en meny med "Hem" och "Om oss"
- [x] Den aktiva sidan i menyn är visuellt markerad
- [x] Startsidan visar alla 6 filmer som klickbara kort
- [x] Klick på ett filmkort tar dig till en egen sida för den filmen
      (`/movies/1`, `/movies/2` osv.) med titel, bild och beskrivning
- [x] "Om oss"-länken fungerar
- [x] En påhittad URL, t.ex. `/blaha`, visar 404-sidan istället för att
      krascha eller visa en vit sida
- [x] Om du går till `/movies/999` (ett id som inte finns) visas ett
      snällt felmeddelande istället för en krasch

## Bonusuppgifter (om du blir klar i tid)

Välj en eller flera:

1. **Exakt matchning:** Just nu blir "Hem"-länken markerad som aktiv
   även när du står på en filmsida (eftersom `/movies/3` börjar med
   `/`). Lägg till `end`-propen på den `NavLink`en så att den bara är
   aktiv på exakt `/`.
2. **Tillbaka-knapp:** Lägg till en knapp på detaljsidan som använder
   `useNavigate()` och `navigate(-1)` för att gå tillbaka till
   föregående sida (istället för alltid till startsidan).
3. **Sök:** Lägg till ett sökfält på startsidan som filtrerar
   `movies`-listan baserat på vad man skriver (rent React-state, ingen
   router-koppling behövs — men om du vill gå vidare kan du spara
   söktexten i URL:en med `useSearchParams` så att den överlever en
   omladdning av sidan).
4. **Egen route:** Lägg till en ny sida, t.ex. `/kontakt`, med en egen
   komponent och en länk till den i menyn.

## Vanliga fel att hålla koll på

- **Vit/tom sida utan felmeddelande i webbläsaren:** öppna
  webbläsarens konsol (högerklicka → Inspektera → Console) — React
  Router är tydligt med felmeddelanden där, t.ex. om en route saknar
  `element`.
- **Menyn syns men ingen sida visas under den:** du har troligen
  glömt `<Outlet />` i `Layout.jsx` (Steg 3).
- **En nästlad route visas inte alls:** kontrollera att den ligger
  _inuti_ `<Route path="/" element={<Layout />}>...</Route>` och inte
  som en egen, fristående `<Route>` direkt under `<Routes>`.
- **Klick på en film ger en tom eller trasig detaljsida:** kolla att
  du jämför `movie.id` med `Number(movieId)` och inte bara `movieId`
  (strängen `"1"` är inte samma sak som talet `1` i JavaScript).
- **Importfel typ "does not provide an export named ...":** kontrollera
  att du importerar från `"react-router-dom"` (paketet som redan är
  installerat i version 6.3.0).

## Dokumentation

Vi kör specifikt **version 6.3** av React Router i den här övningen (inte
den senaste versionen), så använd gärna de versionslåsta docsen nedan —
API:et skiljer sig en del från nyare versioner.

- Kom-igång: https://reactrouter.com/6.3.0/getting-started/overview
- Tutorial (mer utförlig genomgång): https://reactrouter.com/6.3.0/getting-started/tutorial
- API-referens (`useParams`, `NavLink`, `Route` m.m.): https://reactrouter.com/6.3.0/api
