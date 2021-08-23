import React from "react";
//global styles
import { GlobalStyle } from "./GlobalStyles";
//components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//we made a implict return with our arrow function
//for we routing we replace our div with router
// router wraps routes & routes wraps route
// And route is a self closing tag
const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
