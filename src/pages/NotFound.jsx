import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>404 – Sidan finns inte</h2>
      <p>Den här sidan hittar vi tyvärr inte i Filmklubben.</p>
      <Link to="/" className="back-link">
        ← Tillbaka till startsidan
      </Link>
    </div>
  );
}
