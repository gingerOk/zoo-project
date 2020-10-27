import { useEffect, useState } from 'react'
import animals from '../data'

const FactsBlock = () => {

    const [animal, setAnimal] = useState(animals[0]);
    const [refreshInterval, setRefreshInterval] = useState(5000);

    const randomAnimal = () => {
       return { ...animals[Math.floor(Math.random() * animals.length)] };
    }
    const pickAnimal = () => {
        const item = randomAnimal();
        if(item.fact) {
            setAnimal(item);
        }
    }

    useEffect(() => {
        if(refreshInterval && refreshInterval > 0) {
            const interval = setInterval(pickAnimal, refreshInterval);
            return () => clearInterval(interval);
        }
    })
    
    return (
        <>
        <div className="card text-center text-white border-0 mb-3" style={{height: 400, width: 400}}>
            <div className="position-relative card_image">
                <div className="overflow-hidden image_block">
                    <img src={animal.imageLink} className="card-img-top"  alt="..."  />
                </div>
                <div className="position-absolute w-100 py-3 px-2 card-title_custom">
                    <p className="card-text">{animal.fact}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default FactsBlock;