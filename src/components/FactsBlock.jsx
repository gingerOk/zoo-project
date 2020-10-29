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
            setRefreshInterval(5000);
        } else {
            setRefreshInterval(10);
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
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <div className="header">
                    <h2 className="m-5">
                        <p>INTERESTING FACTS</p>
                    </h2>
                    </div>
                <div className="header_icon m-5">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-double-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
                    
                    <div className="card text-center text-white border-0 mb-3 mx-auto d-block" style={{height: 600, width: 700}}>
                        <div className="position-relative card_image">
                            <div className="overflow-hidden image_block">
                                <img src={animal.imageLink} className="card-img-top"  alt="..."  />
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
    )
}

export default FactsBlock;