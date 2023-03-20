import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cards from "./components/Cards/Cards";
import Search from './components/Search/Search';
import CardDetails from "./components/Cards/CardDetails";
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState('');
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">

      <header className='header'>
        <img className='header-logo' src="logo.png" alt="logo" />
      </header>

      <section className='section search'>
          <Search setSearch={setSearch} />
      </section>
      
      <section className='section cards'>
        <div className="card-box">
          <Cards results={results} />
        </div>
      </section>

    </div>
  );
};

export default App;