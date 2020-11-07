import React from "react";
import {BsPlus} from "react-icons/bs";

const AddBtn = ({text, handleClick}) => {
return (
    <div className="row justify-content-end">
        <div className="col-4">
          <button
            type="button"
            className="btn btn-dark px-5 py-2 my-4"
            onClick={handleClick}
          >
            <BsPlus size={36} />
            {text}
          </button>
        </div>
      </div>
)
}

export default AddBtn