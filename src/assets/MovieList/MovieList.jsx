import React, { useState, useEffect } from "react";
import "./MovieList.css";
import _ from "lodash";

// import from source folder
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ type, title, emoji }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [filterMoviesList, setFilterMoviesList] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=89f974224cfce0ee6bec9a3d4bda6206#`
    );
    const data = await response.json();
    setMoviesList(data.results);
    setFilterMoviesList(data.results);
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMoviesList(moviesList);
    } else {
      setMinRating(rate);

      const filtered = moviesList.filter((movie) => movie.vote_average >= rate);
      setFilterMoviesList(filtered);
    }
  };

  const handleSort = (event) => {
    const { name, value } = event.target;

    setSort((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMoviesList = _.orderBy(
        filterMoviesList,
        [sort.by],
        [sort.order]
      );
      setFilterMoviesList(sortedMoviesList);
    }
  }, [sort]);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title}
          <img src={emoji} alt={`${emoji} icon`} className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            handleFilter={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.by}
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.order}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filterMoviesList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
