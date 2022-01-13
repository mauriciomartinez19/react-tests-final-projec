import { useEffect, useState } from "react"
import './countries.css'
import './countries-reverse.css'
import Flag from "./flag"

const CountriesHome = () => {

    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getCountries = async () => {
        setIsLoading(true)
        const response = await fetch('http://localhost:5000/api/countries')
        const data = await response.json()
        setCountries(data)
        setIsLoading(false)
    }
    useEffect(() => {
        getCountries()
    }, [])
    if (isLoading) {
        return <h1>Is Loading</h1>
    }
    return <div className="CountriesHome">
        {countries.map((country, i) => {
            return <Flag
                {...country}
                key={i} />
        })}
    </div>
}

export default CountriesHome