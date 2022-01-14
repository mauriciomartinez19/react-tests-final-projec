import CountriesHome from "./countries-home"
import Wishlist from "./wishlist"
import './countries.css'
import './wishlist.css'

const Countries = () => {

    const FLAG_BASE_URI = 'https://countryflagsapi.com/png/'

    return <div className="countries-page">
        <h1 className="title">Select your next trip!!!</h1>
        <Wishlist
            FLAG_BASE_URI={FLAG_BASE_URI} />
        <CountriesHome
            FLAG_BASE_URI={FLAG_BASE_URI} />
    </div>
}

export default Countries