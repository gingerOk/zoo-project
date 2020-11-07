import React, {memo} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import AnimalCard from "./AnimalCard";

const AnimalsList = ({animals, deleteAnimal}) => {
  return (
    <div className="row my-5 justify-content-center px-2">
      {animals.map(item => (
        <div className="col-md-4 col px-lg-5 my-lg-3" key={item.id}>
            <AnimalCard key={item.id} animal={item} deleteAnimal={deleteAnimal} />
        </div>
      ))}
    </div>
  );
};

AnimalsList.propTypes = {
  animals: PropTypes.arrayOf(PropTypes.object).isRequired,
};

AnimalsList.defaultProps = {
  animals: [],
};

export default memo(AnimalsList);
