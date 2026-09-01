import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>   (gemensam ram med nav)
              <Route index element={<Home />} />
              {/* Lägg in fler routes här */}
              {/*
          ============================================================
          TODO 1: Bygg upp routträdet med <Route>-element.

              Lägg här in flera <Route>-komponenter - movies/:movieid, about och  * (404-sida) 
            </Route>

          Dokumentation: https://reactrouter.com/6.3.0/getting-started/overview
          ============================================================
        */}
        </Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
