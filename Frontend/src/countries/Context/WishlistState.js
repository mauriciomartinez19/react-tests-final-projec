import { useState } from "react";

import WishlistContext from "./WishlistContext";


const WishlistState = (props) => {

    const [wishlist, setWishlist] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)


    const getWishlist = async () => {
        const response = await fetch('http://localhost:5000/api/countries/wishlist')
        const data = await response.json()
        refreshWishlist(data)
    }

    const addToWishlist = async (e) => {
        const { value, name } = e.target
        const mes = { value, name }

        const reqSettings = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mes)
        }
        const response = await fetch('http://localhost:5000/api/countries/wishlist', reqSettings)
        const data = await response.json()
        refreshWishlist(data)
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
        refreshWishlist(data)
    }

    const refreshWishlist = (data) => {
        setWishlist(data)
        const price = data.map((country) => country.price * country.quantity)
        setTotalPrice(price.reduce((acc, cur) => acc + cur, 0))
    }

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                totalPrice,
                addToWishlist,
                getWishlist,
                deleteItem
            }}>
            {props.children}
        </WishlistContext.Provider>
    )
}

export default WishlistState