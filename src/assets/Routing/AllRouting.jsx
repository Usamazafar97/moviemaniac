import React from "react";
import { NavLink } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import Popular from "../Popular";
import Upcoming from "../Upcoming";
import Top_Rated from "../Top_Rated";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "../MovieList/MovieDetail";

const AllRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Popular />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/top_rated" element={<Top_Rated />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default AllRouting;
