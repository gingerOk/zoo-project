import {useEffect, useState} from "react";
import FactsBlockContainer from "pages/HomePage/components/FactsBlockContainer";
import Spinner from "components/Spinner";

const FactsBlock = ({animals}) => {
  const [animal, setAnimal] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (animals) {
      setLoading(false);
      const interval = setInterval(function () {
        setAnimal({...animals[Math.floor(Math.random() * animals.length)]});
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [animal, animals]);

  return (
    <div>{loading ? <Spinner /> : <FactsBlockContainer animal={animal} />}</div>
  );
};

export default FactsBlock;
