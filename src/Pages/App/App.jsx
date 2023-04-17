import { useState } from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import NavBar from '../../components/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';

function App() {
  const [user, setUser] = useState(null)


  return (
   <main className="App">
    {user ?
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<MoviesListPage />} />
          <Route path='/movies/:movieName' element={<MovieDetailPage />} />
          <Route path='/actors' element={<ActorListPage />} />
        </Routes>
      </>
    :
    <LoginPage setUser={setUser} path='/' />
    }
   </main>
  );
}

export default App;
