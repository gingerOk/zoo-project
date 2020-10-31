import HeaderImage from "../../components/HeaderImage";
import SearchBlock from "../../components/SearchBlock";
import FactsBlock from "../../components/FactsBlock";
import animals from "../../data";
import AnimalsPage from "../AnimalsPage";

const HomePage = () => {
  return (
    <>
      <HeaderImage />
      <FactsBlock />
      <SearchBlock />
    </>
  );
};

export default HomePage;
