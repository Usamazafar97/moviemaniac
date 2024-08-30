import React from "react";

// import MovieList from "./assets/MovieList/MovieList";
import Fire from "./fire.png";
import MovieList from "./MovieList/MovieList";

const Popular = () => {
  return (
    <div>
      <MovieList type="popular" title="Popular" emoji={Fire} />
    </div>
  );
};

export default Popular;
