import {useEffect, useState} from "react";
import FactsBlockContainer from "pages/HomePage/components/FactsBlockContainer"
import Spinner from "components/Spinner"

const FactsBlock = ({animals}) => {
  const [animal, setAnimal] = useState("");
  const [loading, setLoading] = useState(true);

  const randomAnimal = () => {
    return {...animals[Math.floor(Math.random() * animals.length)]};
  };

  useEffect(() => {
    if(animal.imageLink) setLoading(false)
    if(animals && !animal.imageLink) {
      setAnimal(randomAnimal)
    } else {
      const interval = setInterval(function(){
        setAnimal(randomAnimal)
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [animal]);

  return <div>
    {loading ? <Spinner /> : <FactsBlockContainer animal={animal} />}
  </div>
};

export default FactsBlock;
