//Config

//components

//Hook

//with useParams from react-router-dom we can get the movieId

//Imageimport { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";
import NoImage from "../images/no_image.jpg";
import React from "react";
import Spinner from "./Spinner";
import { useMovieFetch } from "../hooks/useMovieFetch";
import { useParams } from "react-router-dom";

const Movie = () => {
  //simple isn't it?
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something Went Wrong, Check Your Connection...</div>;

  console.log(movie);
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
    </>
  );
};

export default Movie;
