import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {useAnimals, deleteAnimal} from "../../../contexts/AnimalsContext";

const SelectButton = ({animal}) => {
  return (
    <Link
      to={`/animals/edit/${animal.id}`}
      className="btn btn-dark mt-2 w-50"
    >Edit</Link>
  );
};

const DeleleButton = ({animal}) => {
const [, dispatch] = useAnimals();
  return (
    <span
      onClick={() => deleteAnimal(dispatch, animal)}
      className="btn btn-warning mt-2 w-50"
    >
      YES
    </span>
  );
};

const AnimalCardBtns = ({animal}) => {
  const [show, setShow] = useState(false);

  const showConfirm = () => setShow(true);
  const hideConfirm = () => setShow(false);

  const confirmButtons = (
    <div className="btns w-100">
      <DeleleButton animal={animal} />
      <span onClick={hideConfirm} className="btn btn-light mt-2 w-50">
        NO
      </span>
    </div>
  );

  const buttons = (
    <div className="btns w-100">
      <SelectButton animal={animal} />
      <span onClick={showConfirm} className="btn btn-light mt-2 w-50">Delete</span>
    </div>
  );

  return <div className="btns">{show ? confirmButtons : buttons}</div>;
};

export default AnimalCardBtns;
