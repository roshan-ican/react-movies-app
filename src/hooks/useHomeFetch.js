import { useState, useEffect, useRef } from "react";
//API
//we will use the useEfFect to fetch data

import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  //creating a new hook for SearchBox
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(searchTerm);

  const fetchMovies = async (page, searchTerm = "") => {
    //this will show the loading spinner
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      //returning a object with setState
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  //initial and search
  //at dep searchTerm the useEffect will trigger each time searchTerm renders
  useEffect(() => {
    fetchMovies(1);
  }, [searchTerm]);
  return { state, loading, error, setSearchTerm };
};
