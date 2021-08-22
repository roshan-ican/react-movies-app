import React from "react";
//global styles
import { GlobalStyle } from "./GlobalStyles";
//components
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}
export default App;
