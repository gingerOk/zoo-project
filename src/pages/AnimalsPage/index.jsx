import AnimalKindomCard from "./components/AnimalKindomCard";
import {animalsKindoms} from "../../data";

const AnimalsPage = () => {
  return (
    <div className="container">
      <div className="row">
      <div className="col text-center">
            <div className="header">
              <h2 className="m-5">
                <p>ANIMAL KINDOMS</p>
              </h2>
            </div>
      </div>
      </div>
      <div className="row my-5 px-5">
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
