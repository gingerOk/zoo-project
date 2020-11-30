import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import _find from "lodash/find";
import { useAnimals} from "contexts/AnimalsContext";



const initialData = {
  id: null,
  name: "",
  imageLink: "",
  shortDescription: "",
  description: "",
  fact: "",
  scientificName: "",
};

const AnimalPage = (props) => {
  const [data, setData] = useState(initialData);
  const [state, dispatch] = useAnimals();
  const {id} = useParams();
  
  useEffect(() => {
    const animal = _find(state.animals, {id}) || {};
    if (animal.id && animal.id !== data.id) {
      setData(animal);
    }

    if (!animal.id && data.id) {
      setData(initialData);
    }
  }, [id, data.id, state]);
  
  return (
    <div className="my-5">
      <div className="image_height w-100 px-0">
        <div className="image_block relative">
          <img src={data.imageLink} className="w-100" alt="" />
          <h1 className="display-1 image-header-text pb-2">
            {data.name.toUpperCase()}
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="block">
          <h3 className="display-5">Scientific Name : {data.scientificName}</h3>
        </div>
        <div className="body-text">
          <p>{data.description}</p>
          <p>
            <strong>Did you Know? </strong>
            {data.fact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimalPage;
