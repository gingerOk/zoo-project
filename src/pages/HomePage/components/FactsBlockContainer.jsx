import {BsChevronDoubleDown} from "react-icons/bs";

const FactsBlockContainer = ({animal}) => {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col text-center">
            <div className="header">
              <h2 className="m-5">
                <p>INTERESTING FACTS</p>
              </h2>
            </div>
            <div className="header_icon m-5">
              <BsChevronDoubleDown size={36} />
            </div>
            <div className="card text-center text-white border-0 mb-3 mx-auto d-block card-image">
              <div className="position-relative">
                <div className="overflow-hidden image-block">
                  <img
                    src={animal.imageLink}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="position-absolute w-100 py-3 px-2 card-title-custom">
                  <p className="card-text">{animal.fact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FactsBlockContainer;
