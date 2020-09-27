import React, { useRef } from "react";

const SearchBox = ({ handleSearch }) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="search" name="" id="" />
        <button type="submit">Search Profile</button>
      </form>
    </div>
  );
};

export default SearchBox;
