import React from "react";
import { useParams } from "react-router-dom";
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//components
import BreadCrumb from "./BreadCrumb";
import Spinner from "./Spinner";
import Grid from "./Grid";
import MovieInfo from "./MovieInfo";
//Hook
import { useMovieFetch } from "../hooks/useMovieFetch";
//with useParams from react-router-dom we can get the movieId
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  //simple isn't it?
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something Went Wrong, Check Your Connection...</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;
