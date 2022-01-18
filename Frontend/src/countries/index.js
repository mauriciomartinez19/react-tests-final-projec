import CountriesHome from "./countries-home"
import Wishlist from "./wishlist"
import './countries.css'
import './wishlist.css'

import WishlistState from "./Context/WishlistState"

const Countries = () => {

    const FLAG_BASE_URI = 'https://countryflagsapi.com/png/'

    return (
        <WishlistState>
            <div className="countries-page">
                <h1 className="title-country">Select your next trip!!!</h1>
                <Wishlist
                    FLAG_BASE_URI={FLAG_BASE_URI} />
                <CountriesHome
                    FLAG_BASE_URI={FLAG_BASE_URI} />
            </div>
        </WishlistState>
    )
}

export default Countries