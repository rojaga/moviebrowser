import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { useState,  } from "react";
import Navbar from './components/navbar';
import Home from './components/home';
import AboutView from './components/aboutview';
import SearchView from './components/serachview';
import MovieView from './components/movieview';
import PageNotFound from './components/404_page_not_found'

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  React.useEffect(() => {
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=e790c51b1d476dd3b8960ed4b93e7c38&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          console.log(data.results);          setSearchResults(data.results)
        });
    }
    
  }, [searchText])




  return (
    <div className="">
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
