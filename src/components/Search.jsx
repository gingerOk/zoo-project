import React, {useState} from "react";
import {useAnimals, loadAnimals} from "contexts/AnimalsContext";
import {BsSearch} from "react-icons/bs";
import SearchTopBlock from "components/SearchTopBlock";

const Search = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [{animals, loading}, dispatch] = useAnimals();

  const handleClick = () => {
    loadAnimals(dispatch);
    setIsClicked(true);
    console.log(animals);
  };
  const handleCloseBtn = () => {
    setIsClicked(false);
  };
  return (
    <div>
      {isClicked ? (
        <SearchTopBlock animals={animals} handleCloseBtn={handleCloseBtn} />
      ) : (
        <BsSearch onClick={handleClick} />
      )}
    </div>
  );
};

export default Search;
