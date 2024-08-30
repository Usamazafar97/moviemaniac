import React from "react";

import MovieList from "./MovieList/MovieList";
import Star from "./glowing-star.png";

const Top_Rated = () => {
  return (
    <div>
      <MovieList type="top_rated" title="Top Rated" emoji={Star} />
    </div>
  );
};

export default Top_Rated;
