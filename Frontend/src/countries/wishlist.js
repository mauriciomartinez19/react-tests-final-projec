import { useState, useEffect, useContext } from "react"
import wishIcon from "./wishIcon.png"

import WishlistContext from "./Context/WishlistContext"


const Wishlist = ({ FLAG_BASE_URI }) => {
    const [wishlistState, setWishlistState] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const wishlistContext = useContext(WishlistContext)
    const { wishlist } = useContext(WishlistContext)

    // const deleteItem = async (e) => {
    //     const { value } = e.target
    //     const mes = { value }
    //     const reqSettings = {
    //         method: 'DELETE',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(mes)
    //     }
    //     const response = await fetch('http://localhost:5000/api/countries/wishlist', reqSettings)
    //     const data = response.json()
    //     console.log(data)
    // }

    const getPrice = () => {
        const price = wishlist.map((country) => country.price)
        setTotalPrice(price.reduce((a, b) => a + b, 0))
    }

    useEffect(() => {
        wishlistContext.getWishlist()
        getPrice()
    }, [wishlist.length])

    if (wishlistState) {
        return <div className="wishlist">
            <div className="wish-box">
                <h3>Wishlist</h3>
                <div className="center">
                    {isLoading ? <div></div> :
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
                                        <button className="delete-wish" value={uncode} onClick={(e) => wishlistContext.deleteItem(e)}>Delete</button>
                                    </div>
                                )
                            })

                            }
                        </dl>}
                </div>
                <h5 className="total-price">Total price: ${totalPrice}</h5>
            </div>
            <div className="close-btn-div">
                <button onClick={() => setWishlistState(false)} className="close-btn">Close Wishlist</button>
            </div>
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