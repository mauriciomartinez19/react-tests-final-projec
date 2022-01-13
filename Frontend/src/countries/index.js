import CountriesHome from "./countries-home"
import Wishlist from "./wishlist"
import './countries.css'
import './wishlist.css'

const Countries = () => {
    return <div className="countries-page">
        <h1 className="title">Select your next trip!!!</h1>
        <Wishlist />
        <CountriesHome />
    </div>
}

export default Countries