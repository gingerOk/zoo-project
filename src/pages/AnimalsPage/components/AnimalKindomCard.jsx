import {Link} from "react-router-dom";

const AnimalKindomCard = ({kindom}) => {
  return (
    <div className="card text-center my-3 card_custom position-relative">
      <div className="card_image">
        <Link to={`/animals/${kindom.type.toLowerCase()}`}>
          <div className="image_block">
            <img src={kindom.pic} alt="dd" className="card-img-top h-100" />
            <h2 className="card-title my-5 position-absolute center_position text-warning">
              {kindom.type}
            </h2>
            <button
              type="button"
              className="btn btn-warning text-white position-absolute imageBut center_position"
            >
              See All
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AnimalKindomCard;
