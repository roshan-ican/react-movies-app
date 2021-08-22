import { useState, useEffect } from "react";
//API
//we will use the useEfFect to fetch data

import { isPersistedState } from "../helpers";
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
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  //for load more button the last one above

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
    if (!searchTerm) {
      const sessionState = isPersistedState("homeState");
      if (sessionState) {
        console.log("Grabbing from sessionStorage");
        return;
      }
    }
    console.log("Grabbing from the API");
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  //Load More
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  //Write to sessionStorage
  useEffect(() => {
    if (!searchTerm)
      sessionStorage.setItem("houseState", JSON.stringify(state));
  });
  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
