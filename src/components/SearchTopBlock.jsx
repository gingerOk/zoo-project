import React, {useState, useEffect} from "react";
import {BsX} from "react-icons/bs";
import SearchInput from "components/SearchInput";
import SearchShowBlock from "components/SearchShowBlock";

const SearchTopBlock = ({animals, handleCloseBtn}) => {
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    const results = animals.filter(person =>
      person.name.toLowerCase().includes(searchItem),
    );
    setSearchResults(results);
  }, [animals, searchItem]);

  return (
    <div className="searchBlock">
      <div className="closeBtn" onClick={handleCloseBtn}>
        <div className="closeIcon">
          <BsX color={"white"} />
        </div>
      </div>
      <SearchInput searchItem={searchItem} handleChange={handleChange} />
      {searchItem ? <SearchShowBlock searchResults={searchResults} /> : ""}
    </div>
  );
};

export default SearchTopBlock;
