import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import jsonData from '../utilities/movies.json';
import { Button } from './Button';

const SearchBox = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const filteredMovies = jsonData.movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredMovies.length > 0) {
      setMovies(filteredMovies);
      setError(null);
      setShowResults(true);
    } else {
      setMovies([]);
      setError('No results found');
      setShowResults(false);
    }
  };

  return (
    <div className="search-container">
      <div className="flex gap-6">
        <div className="bar">
          <FaSearch className="text-white" />
          <input
            className="bg-transparent h-full text-xl w-full text-[#121212] ml-[5px] border-[none];
            inputSearch text-white"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
        </div>

        <Button
          className="w-[6.5rem] h-[2.5rem]"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {showResults && movies.length > 0 && (
        <ul className="result-list text-white">
          {movies.map((movie) => (
            <li key={movie.title}>
              <img
                src={require('../assets/avengers.jpg')}
                alt={movie.title}
                className="w-16 h-24"
              />
              <p>{movie.title}</p>
              <p>{movie.year}</p>
              <p>Available on: {movie.platforms.join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
