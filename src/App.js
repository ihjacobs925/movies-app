import './App.css';
import {useState, useEffect} from 'react';

import MovieCard from './Components/Partials/MovieCard';
import MovieCardCont  from './Components/Partials/MovieCardCont';
import Header from './Components/Partials/Header';

function App() {

  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("");
  const [results, setResults] = useState({});
  const [history, setHistory] = useState([]);

  const omdbSearch = `http://www.omdbapi.com/?s=${search}&apikey=58e73b08`

  const handleSearchInput = (e) => {
    let searchInput = e.target.value;
    setSearch(searchInput);
  }

  const handleSearchType = (e) => {
    setSearchType(e.target.value);
  }

  const handleSearchSubmit = async (e) => {
    await fetch(omdbSearch)
    .then(response => {
      let res = response.json()
    })
    .then(jsonDetails => {
      if(jsonDetails) {
        setResults(jsonDetails.results)
      }
    })
  };

  return (
    <div className="App">
      <Header onChange={handleSearchInput} onSubmit={handleSearchSubmit}/>
      <MovieCardCont contTitle={"Current Search"} />
      <MovieCardCont contTitle={"Previous 3 Searches"} />
    </div>
  );
}

export default App;
