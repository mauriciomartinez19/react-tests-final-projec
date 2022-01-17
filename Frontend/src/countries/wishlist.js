import { useState, useEffect, useContext } from "react"
import wishIcon from "./wishIcon.png"

import WishlistContext from "./Context/WishlistContext"


const Wishlist = ({ FLAG_BASE_URI }) => {
    const [wishlistState, setWishlistState] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const wishlistContext = useContext(WishlistContext)
    const { wishlist, getWishlist, totalPrice } = useContext(WishlistContext)

    useEffect(() => {
        getWishlist()
    }, [])


    if (wishlistState) {
        return <div className="wishlist">
            <div className="wish-box">
                <h3>Wishlist</h3>
                <div className="center">
                    {isLoading ? <div></div> :
                        <dl>
                            {wishlist.map((item, i) => {
                                const { name, price, firstid, _id, quantity } = item
                                return (
                                    <div key={i} className="map-list">
                                        <div className="text-wish">
                                            <div className="dt-class">
                                                <img src={`${FLAG_BASE_URI}${firstid}`} alt={name + ': flag'} className="wish-flag" />
                                                <dt>{`${(quantity - 1) ? `x(${quantity})` : ''} ${name}`}</dt>
                                            </div>
                                            <dd>Price: ${price}</dd>
                                        </div>
                                        <button className="delete-wish" value={_id} onClick={(e) => wishlistContext.deleteItem(e)}>Delete</button>
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