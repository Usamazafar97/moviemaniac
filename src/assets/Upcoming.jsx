import React from "react";

import MovieList from "./MovieList/MovieList";
import Party from "./partying-face.png";

const Upcoming = () => {
  return (
    <div>
      <MovieList type="upcoming" title="Upcoming" emoji={Party} />
    </div>
  );
};

export default Upcoming;
