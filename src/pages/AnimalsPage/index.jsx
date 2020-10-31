import AnimalKindomCard from "./components/AnimalKindomCard";
import {animalsKindoms} from "../../data";

const AnimalsPage = () => {
  return (
    <div className="container">
      <div className="row mt-5 px-5">
        {animalsKindoms.map(item => (
          <div className="col-md-4 col" key={item.id}>
            <AnimalKindomCard kindom={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default AnimalsPage;
