import { useEffect, useState } from "react"

const CountriesHome = () => {

    const [countries, setCountries] = useState([])
    const [showFlag, setShowFlag] = useState(true)

    const getCountries = async () => {
        const response = await fetch('http://localhost:5000/api/countries')
        const data = await response.json()
        setCountries(data)
    }
    useEffect(() => {
        getCountries()
    }, [])
    return <div className="CountriesHome">
        {countries.map((country, i) => {
            const { name, firstid, secid, key } = countries[i]
            return <section key={key} className="country">
                <img src={`https://countryflagsapi.com/png/${firstid}`} alt={name + ': flag'} />
                <h1 className="name">{name}</h1>
                <div className="text-zone">
                    <div>
                        <h5>ISO Alpha-2: </h5>
                        <p>{firstid}</p>
                    </div>
                    <div>
                        <h5>ISO Alpha-3:  </h5>
                        <p>{secid}</p>
                    </div>
                    <div>
                        <h5>UN code: </h5>
                        <p>{secid}</p>
                    </div>
                </div>
            </section>
        })}
    </div>
}

export default CountriesHome