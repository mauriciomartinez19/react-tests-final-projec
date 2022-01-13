import { useState } from "react"
import wishIcon from "./wishIcon.png"


const Wishlist = () => {
    const [wishlist, setWishlist] = useState(false)
    if (wishlist) {
        return <div className="wishlist">
            <div className="wish-box">
                <h3>Wishlist</h3>
                <div className="center">
                    <dl>
                        <dt>Argentina</dt>
                        <dd>Price:$2800</dd>
                        <dt>Brazil</dt>
                        <dd>Price:$3400</dd>
                        <dt>Rusia</dt>
                        <dd>Price:$9000</dd>
                    </dl>
                </div>
                <h5 className="total-price">Total price: $35000</h5>
            </div>
            <button onClick={() => setWishlist(false)}>Close Wishlist</button>
        </div>
    }
    return <div className="wishlist-zone">
        <img src={wishIcon} className="wishlist-icon" alt="list-logo" onClick={() => setWishlist(true)} />
        <div className="red-circle">
            <h4>5</h4>
        </div>
    </div>
}


export default Wishlist