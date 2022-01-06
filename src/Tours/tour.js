import React, { useState, useEffect } from 'react';
import './Tours.css';
const url = 'https://course-api.com/react-tours-project'
const Tour = () => {
    const [tours, setTours] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getTours = async () => {
        setIsLoading(true)
        const response = await fetch(url);
        const data = await response.json()
        setTours(data)
        setTimeout(() => {
            setIsLoading(false)
        },
            1000)
    }

    const deleteItem = (id) => {
        const newList = tours.filter((tour) => tour.id !== id)
        setTours(newList)
    }

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 200) : text}
                <span onClick={toggleReadMore} className='text-btn'>
                    {isReadMore ? "...read more" : " show less"}
                </span>
            </p>
        );
    };

    const refreshData = () => {
        getTours()
    }

    useEffect(() => {
        getTours()
    }, [])
    if (isLoading) {
        return <div className='loading'> Is Loading.. </div>
    }
    return (
        tours.length ? (
            <div className="tours-box">{
                tours.map((tour) => {
                    const { id, image, name, info, price } = tour
                    return (
                        <article key={id} className="box">
                            <img className='picture' src={image} />
                            <div className='text-section'>
                                <div className="title-price">
                                    <h5>{name}</h5>
                                    <h6>{price}</h6>
                                </div>
                                <ReadMore>
                                    {info}
                                </ReadMore>
                            </div>
                            <button className='btn' onClick={() => deleteItem(id)}>Not Interested</button>
                        </article>
                    )
                })

            }
            </div>
        ) :
            <div className='refresh-div'>
                <button className='refresh-btn' onClick={() => refreshData()}>Refresh</button>
            </div>
    )
}

export default Tour