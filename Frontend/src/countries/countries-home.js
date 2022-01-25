import { useEffect, useState } from "react"
import './countries.css'
import './countries-reverse.css'
import Flag from "./flag"

import Loading from "../Loading/loading"

const CountriesHome = ({ FLAG_BASE_URI }) => {

    const [countries, setCountries] = useState([])
    const [showCountries, setShowCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getCountries = async () => {
        setIsLoading(true)
        const response = await fetch('http://localhost:5000/api/countries')
        const data = await response.json()
        setCountries(data)
        setShowCountries(data)
        setIsLoading(false)
    }

    const handleChange = (e) => {
        setIsLoading(true)
        const { value } = e.target
        const showCountry = countries.filter((country) => country.name.toUpperCase().includes(value.toUpperCase()))
        const newCountry = (showCountry.length ? (showCountry) : false)
        setShowCountries(newCountry)
        setTimeout(() => setIsLoading(false), 500)
    }

    useEffect(() => {
        getCountries()
    }, [])
    return <>
        {isLoading ? <Loading /> : <>
            <div className="header-country-page">
                <h1 className="title-country">Find your trip!</h1>
                <div className="input-country-div">
                    <input className="country-input" placeholder="search your country" onChange={handleChange} />
                </div>
            </div>
            <div className="CountriesHome">
                {showCountries ?
                    (showCountries.map((country, i) => {
                        return <Flag
                            {...country}
                            FLAG_BASE_URI={FLAG_BASE_URI}
                            key={i} />
                    })) :
                    <h1>No hay coincidencias</h1>}
            </div>
        </>}
    </>
}

export default CountriesHome