import './Reviews.css';
import React, { useState, useEffect } from 'react'
import { data } from './data'

const Cards = () => {
    const [people, setPeople] = useState([])
    const [loading, setLoading] = useState(true)
    const [sliderNumber, setSliderNumber] = useState(0)
    const [person, setPerson] = useState()

    const next = () => {
        const newValue = (sliderNumber + 1) % people.length
        const activeSlide = people.find((data) => data.id === newValue)
        setPerson(activeSlide)
        setSliderNumber(newValue)
    }

    const previous = () => {
        const newValue = (sliderNumber - 1 + people.length) % people.length
        const activeSlide = people.find((data) => data.id === newValue)
        setPerson(activeSlide)
        setSliderNumber(newValue)
    }

    const randomNumber = () => {
        const random = Math.floor(Math.random() * ((data.length) - 0))
        setSliderNumber(random)
        const activeSlide = people.find((data) => data.id === sliderNumber)
        setPerson(activeSlide)
    }

    useEffect(() => {

        // TO DO: Fetch people from backend
        setTimeout(() => {
            setPeople(data)
            setPerson(data[0])
            setLoading(false)
        }, 500);

    }, [])

    if (loading) {
        return <h1 className='rev-load'>...isLoading</h1>
    }
    return (
        <section className="slider-box">
            <article key={person.id} className='slide'>
                <img src={person.img} alt="" className='picture-reviews' />
                <h5 className='name'>{person.name} {person.id}</h5>
                <h6 className='job'>{person.job}</h6>
                <p className='paragraph'>{person.paragraph}</p>
                <div className="arrows">
                    <p><i className="arrow left" onClick={() => previous()}></i></p>
                    <p><i className="arrow right" onClick={() => next()}></i></p>
                </div>
                <button className='suprise-btn' onClick={() => randomNumber()}>Surprise Me</button>
            </article>
        </section>

    )

}


export default Cards