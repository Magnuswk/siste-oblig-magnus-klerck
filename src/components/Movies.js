import {useState} from 'react';
import React from 'react';
import Movie from './Movie';
import {getMovies} from '../utils/movieService';

const Movies = () => {
  const [film, setFilm] = useState([]);
  
   const handleClick = async() => {
     const allFilm = await getMovies();
     setFilm(allFilm);
   };

  return (
  <section>
    
    
       {film?.length > 0 ? film.map(movie => <Movie title={movie.title} actor={movie.actor} />) : <p>wassup</p> }
       <button type="button" onClick={handleClick}>Get content</button>
  </section>
  );
}


export default Movies;