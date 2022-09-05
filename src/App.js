import React, { useState, useEffect } from "react";
import './App.css';
import MovieCard from "./components/MovieCard";
import Search from "./components/Search";
import MovieHead from "./components/MovieHead";
import AddToFav from './components/AddToFav';
import RemoveFromFav from './components/RemoveFromFav';
import ClearFavorite from './components/ClearFavorite'


function App() {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState([])

  
   const searchMovies = async (searchTerm) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=6d24f16e38baa5c25f6addef9f64a846&query=${searchTerm}`;
    const res = await fetch(url);
    const data = await res.json()
    
    if (data.results) {
      setMovies(data.results)
    }
  }

  
  useEffect(() => {
    searchMovies('avengers')
    searchMovies(searchTerm)
    const favoriteMovies = JSON.parse
    (localStorage.getItem('favorites'))
      setFavorites(favoriteMovies)
  }, [searchTerm])
  
  const saveToLocalStorage = (favArray) => {
    localStorage.setItem('favorites', JSON.stringify(favArray))
  }

  const addMovieToFav = (movie) => {
    if (favorites.indexOf(movie) !== -1) return    
    const favArray = [...favorites, movie]      
    setFavorites(favArray)
    saveToLocalStorage(favArray)
  }

  const RemoveMovieFromFav = (movie) => {
    const favArray = favorites.filter(
      (favorite) => favorite.id !== movie.id)
    setFavorites(favArray)
    saveToLocalStorage(favArray)
  }

  const ClearFavoriteMovies = () => {
    const favArray = []
    setFavorites(favArray)
    saveToLocalStorage(favArray)
  }

  const containers = document.querySelectorAll("#main");
    for (let i = 0; i < containers.length; i++) {
      let container=containers[i]
      container.addEventListener("wheel", function (e) {
				if (e.deltaY > 0) {
				container.scrollLeft += 400;
				e.preventDefault();
				}
				else {
				container.scrollLeft -= 400;
				e.preventDefault();
				}
			});      
    }

  return (
    <>     
    <div className="flex justify-between items-center m-[10px]">
      <MovieHead heading='Movies'/>
      <Search value={searchTerm} setValue={setSearchTerm}/>
    </div>
    <div id="main" className="flex overflow-x-hidden overflow-y-hidden">
      {movies.length > 0 
        ? <MovieCard
          movies={movies}
          alterfav={AddToFav}    
          handleClick={addMovieToFav}        
        />
        : <p className="font-roboto text-sm px-0 py-2.5 text-center w-full h-[15vh] flex justify-center items-center">
        Connect to the internet and refresh page to display movies
        </p>}
    </div>
    <div className="flex justify-between items-center m-[10px]">
      <MovieHead heading='Favorites'/>
      <ClearFavorite
      onclear={ClearFavoriteMovies}
      />
    </div>
    <div id="main" className="flex overflow-x-hidden overflow-y-hidden">
      {favorites.length > 0 
      ? <MovieCard
        movies={favorites}
        alterfav={RemoveFromFav}    
        handleClick={RemoveMovieFromFav}        
      />
      : <p className="font-roboto text-sm px-0 py-2.5 text-center w-full h-[15vh] flex justify-center items-center">
      Your favorite movies will be displayed here
      </p>}
    </div>
    </>
  );
}

export default App;
