import React, {useState} from "react";
import animals from "../data";
import SearchShowBlock from "./SearchShowBlock";

const SearchBlock = () => {
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => {
    setSearchItem(e.target.value);
  };
  React.useEffect(() => {
    const results = animals.filter(person =>
      person.name.toLowerCase().includes(searchItem),
    );
    setSearchResults(results);
  }, [searchItem]);

  return (
    <div className="search_block">
      <div className="row">
        <div className="col-sm-4 col-0 px-0">
          <div className="card_image search_image">
            <div className="image_block">
              <img src="./img/search-light-left.jpg" alt="pandas" />
            </div>
          </div>
        </div>
        <div className="col text-center px-0">
          <h2>Animal Facts & Pictures</h2>
          <input
            type="text"
            placeholder="Search Animals..."
            value={searchItem}
            onChange={handleChange}
          />
          {searchItem ? <SearchShowBlock searchResults={searchResults} /> : ""}
        </div>
        <div className="col-sm-4 col-0 px-0">
          <div className="card_image search_image">
            <div className="image_block">
              <img src="./img/search-light-right.jpg" alt="whoknows" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBlock;
