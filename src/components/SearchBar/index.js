import React, { useState, useEffect, useRef } from "react";
//Image import it
import searchIcon from "../../images/search-icon.svg";
//styles
import { Wrapper, Content } from "./SearchBar.style";

//we will make this a controlled component and a controlled component is
//something that react controls and how will we do it
//with useState and useEffect
const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    //we created the timer which will trigger each half sec
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);
  //we are making the timer with useEffect because we want a little delay at search therefore we added the
  //dependencies
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
