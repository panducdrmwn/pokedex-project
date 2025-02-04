import { useState, useRef } from "react";
import PropTypes from "prop-types";

const SearchBar = ({onSearch}) => {
    const inputRef = useRef(null);
    const [search, setSearch] = useState("");

    const handleIconClick = () => {
    inputRef.current.focus();
    };

    const handleInputChange = (event) => {
    setSearch(event.target.value);
    };

    const handleSearch = () => {
    onSearch(search);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          onSearch(search);
        }
      };
  return (
    <div className="flex flex-row">
    <input
          type="text"
        placeholder="  Search pokemon"
          className="mx-2 w-full outline-none bg-white rounded-2xl text-sm flex flex-row"
          ref={inputRef}
          value={search}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
    <button className="bg-green-300 p-2 rounded-3xl" onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar