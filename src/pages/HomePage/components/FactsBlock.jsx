import {useEffect, useState} from "react";
import animals from "data";
import {BsChevronDoubleDown} from "react-icons/bs"

const FactsBlock = ({creatures}) => {
  const [animal, setAnimal] = useState(animals[0]);
  const [refreshInterval, setRefreshInterval] = useState(5000);
  const randomAnimal = () => {
    return {...animals[Math.floor(Math.random() * animals.length)]};
  };
  const pickAnimal = () => {
    const item = randomAnimal();
    if (item.fact) {
      setAnimal(item);
      setRefreshInterval(5000);
    } else {
      setRefreshInterval(10);
    }
  };

  useEffect(() => {
    if (refreshInterval && refreshInterval > 0) {
      const interval = setInterval(pickAnimal, refreshInterval);
      return () => clearInterval(interval);
    }
  });

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
              <BsChevronDoubleDown size={36}/>
            </div>

            <div
              className="card text-center text-white border-0 mb-3 mx-auto d-block"
              style={{height: 600, width: 700}}
            >
              <div className="position-relative card_image">
                <div className="overflow-hidden image_block">
                  <img
                    src={animal.imageLink}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="position-absolute w-100 py-3 px-2 card-title_custom">
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

export default FactsBlock;