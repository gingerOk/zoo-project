import React, {memo, useContext} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {userInfo} from "../../../data";
import AnimalCardBtns from "./AnimalCardBtns";
const AnimalCard = ({animal, deleteAnimal}) => {
  const user = userInfo[1];
  return (
    
    <div className="card border-0">
      <Link to="/" className="text-decor-none">
      <img
        src={animal.imageLink}
        alt={animal.name}
        className="card-img-top animal-card"
      />
      <div className="card-body">
        <h5 className="card-title text-uppercase text-dark">{animal.name}</h5>
        <p className="card-text text-dark"></p>
        <p className="card-text text-uppercase">LEARN MORE </p>
      </div>
      </Link>
      {user.token && user.role === "admin" && (
        <AnimalCardBtns animal={animal} deleteAnimal={deleteAnimal}/>
      )}
    </div>
  );
};

AnimalCard.propTypes = {
  animal: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
  }).isRequired,
};

AnimalCard.defaultProps = {
  animal: {},
};
export default memo(AnimalCard);
