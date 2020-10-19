import React, { useState } from "react";

import { useUniqueIds } from "../../hooks/useUniqueIds";
import "./search.style.scss";
const Search = () => {
  const [fullName, setFullName] = useState("");
  const [fullNameId] = useUniqueIds(1);
  return (
    <form className="container form">
      <div className="form__group">
        <input
          type="text"
          placeholder="Search by FullName"
          aria-label="Search by FullName"
          id={fullNameId}
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          className="form__input"
        />
        <button type="submit" className="form__btn">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
