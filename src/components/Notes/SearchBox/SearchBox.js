import "../../../styles/SearchBox/SearchBox.css";
import React from "react";
import { useSearchParams } from "react-router-dom";

const SearchBox = () => {
  const [, setSearchParams] = useSearchParams();

  const onSearchParamsChangedHandler = (event) => {
    const title = event.target.value;
    setSearchParams({ title: title.toLowerCase() });
  };

  return (
    <div className="search-box">
      <input
        className="search-box__input"
        placeholder="Cari judul catatan..."
        onChange={onSearchParamsChangedHandler}
      />
    </div>
  );
};

export default SearchBox;
