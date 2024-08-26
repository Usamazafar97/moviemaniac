import React from "react";
import "./App.css";
import Navbar from "./assets/components/Navbar/Navbar";
import MovieList from "./assets/MovieList/MovieList";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList />
    </div>
  );
};

export default App;
