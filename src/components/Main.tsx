import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Home from './Home';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [welMovie, setWelMovie] = useState([]);
  const [menu, setMenu] = useState("");
  const [search, setSearch] = useState(false);

  const searchRef = useRef(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(menu === "home" || menu === "" ? 'https://api.themoviedb.org/3/movie/upcoming?api_key=bafe69fa3ff39dad7fd7e158dca6b32f' : `https://api.themoviedb.org/3/discover/${menu ?menu :"movie"}?api_key=bafe69fa3ff39dad7fd7e158dca6b32f`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setMovies(json.results);
        // Set the first movie as the welcome movie
        setWelMovie(json.results[0]);
      } catch (err) {
        console.error(err);
      }
    };

    getMovies();
  }, [menu]);

  console.log(movies);

  return (
    <div className='bg-black h-screen'>
      <div className='flex bg-black w-full'>
        <div className='w-1/12 bg-black'>
          <Navbar setMenu={setMenu} setSearch={setSearch} search={search} searchRef={searchRef}/>
        </div>
        <div className='w-11/12'>
          {!search && <Welcome welMovie={welMovie} />}
          <div>
            <Home search={search} movies={movies} searchRef={searchRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
