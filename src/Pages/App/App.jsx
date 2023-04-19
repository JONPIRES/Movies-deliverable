import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar";
import LoginPage from "../LoginPage/LoginPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import ActorListPage from "../ActorListPage/ActorListPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <h1>Get your popcorn!</h1>
          <Routes>
            <Route path="/all-movies" element={<MoviesListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
      ) : (
        <LoginPage setUser={setUser} path="/" />
      )}
    </main>
  );
}

export default App;
