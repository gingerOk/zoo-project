import React, {useEffect} from "react";
import HeaderImage from "pages/HomePage/components/HeaderImage";
import SearchBlock from "pages/HomePage/components/SearchBlock";
import FactsBlock from "pages/HomePage/components/FactsBlock";
import {useAnimals, loadAnimals} from "contexts/AnimalsContext";
import Spinner from "components/Spinner";

const HomePage = () => {
  const [{animals, loading}, dispatch] = useAnimals();

  useEffect(() => {
    loadAnimals(dispatch);
  }, [dispatch]);

  console.log(animals)
  return (
    // <div>
    //   {loading ? (
    //     <Spinner />
    //   ) : (
        <>
          <HeaderImage />
          <FactsBlock creatures={animals}/>
          <SearchBlock animals={animals} />
        </>
    //   )}
    // </div>
  );
};

export default HomePage;
