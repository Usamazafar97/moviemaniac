import React from "react";
import "./App.css";
import Navbar from "./assets/components/Navbar/Navbar";
import MovieList from "./assets/MovieList/MovieList";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import AllRouting from "./assets/Routing/AllRouting";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <MovieList type="popular" title="Popular" emoji={Fire} />
      <MovieList type="top_rated" title="Top Rated" emoji={Star} />
      <MovieList type="upcoming" title="Upcoming" emoji={Party} /> */}
      <AllRouting />
    </div>
  );
};

export default App;
