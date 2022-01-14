import { useState } from "react";

import WishlistContext from "./WishlistContext";


const WishlistState = (props) => {

    const [wishlist, setWishlist] = useState([])

    const getWishlist = async () => {
        const response = await fetch('http://localhost:5000/api/countries/wishlist')
        const data = await response.json()
        setWishlist(data)
    }

    const addToWishlist = async (e) => {
        const { value } = e.target
        const mes = { value }

        const reqSettings = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mes)
        }
        const response = await fetch('http://localhost:5000/api/countries/wishlist', reqSettings)
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
        const response = await fetch('http://localhost:5000/api/countries/wishlist', reqSettings)
        const data = await response.json()
        setWishlist(data)
    }

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                addToWishlist,
                getWishlist,
                deleteItem
            }}>
            {props.children}
        </WishlistContext.Provider>
    )
}

export default WishlistState