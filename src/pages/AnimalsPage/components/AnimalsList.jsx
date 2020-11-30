import React, {memo} from "react";
import PropTypes from "prop-types";
import AnimalCard from "pages/AnimalsPage/components/AnimalCard";

const AnimalsList = ({animals}) => {
  return (
    <div className="row my-5 justify-content-center px-2">
      {animals.map(item => (
        <div className="col-md-4 px-lg-5 my-lg-3" key={item.id}>
          <AnimalCard key={item.id} animal={item} />
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
