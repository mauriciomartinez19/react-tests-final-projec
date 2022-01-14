import { useState, useEffect } from "react"
import wishIcon from "./wishIcon.png"


const Wishlist = ({ FLAG_BASE_URI }) => {
    const [wishlistState, setWishlistState] = useState(false)
    const [wishlist, setWishlist] = useState([])

    const getWishlist = async () => {
        const response = await fetch('http://localhost:5000/api/countries/wishlist')
        const data = await response.json()
        setWishlist(data)
    }

    const deleteItem = async (e) => {
        const { value } = e.target
        const mes = { value }

        const reqSettings = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mes)
        }
        await fetch('http://localhost:5000/api/countries/wishlist', reqSettings)
    }
    // const [totalPrice, setTotalPrice] = useState(0)
    // const price = wishlist.map((country) => country.price)
    // if (price) {
    //     setTotalPrice(price.reduce((a, b) => a + b, 0))
    // }

    useEffect(() => {
        getWishlist()
    }, [wishlist])

    if (wishlistState) {
        return <div className="wishlist">
            <div className="wish-box">
                <h3>Wishlist</h3>
                <div className="center">
                    <dl>
                        {wishlist.map((item, i) => {
                            const { name, price, firstid, uncode } = item
                            return (
                                <div key={i} className="map-list">
                                    <div className="text-wish">
                                        <div className="dt-class">
                                            <img src={`${FLAG_BASE_URI}${firstid}`} alt={name + ': flag'} className="wish-flag" />
                                            <dt>{name}</dt>
                                        </div>
                                        <dd>Price: ${price}</dd>
                                    </div>
                                    <button className="delete-wish" value={uncode} onClick={(e) => deleteItem(e)}>Delete</button>
                                </div>
                            )
                        })

                        }
                    </dl>
                </div>
                <h5 className="total-price">Total price: $99999</h5>
            </div>
            <button onClick={() => setWishlistState(false)}>Close Wishlist</button>
        </div >
    }
    return <div className="wishlist-zone">
        <img src={wishIcon} className="wishlist-icon" alt="list-logo" onClick={() => setWishlistState(true)} />
        {wishlist.length ? (
            <div className="red-circle">
                <h4>{wishlist.length}</h4>
            </div>
        ) : <div></div>}

    </div>
}


export default Wishlist