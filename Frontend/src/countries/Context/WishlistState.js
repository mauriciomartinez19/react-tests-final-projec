import { useState } from "react";
import jwt_decode from "jwt-decode";

import WishlistContext from "./WishlistContext";


const WishlistState = (props) => {

    const [wishlist, setWishlist] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [userId, setUserId] = useState('')



    const getWishlist = async () => {
        const token = localStorage.getItem('token')
        let decoded = jwt_decode(token)
        const id = decoded.id
        setUserId(id)

        const response = await fetch(`http://localhost:5000/api/countries/wishlist/${id}`)
        const data = await response.json()
        refreshWishlist(data)
    }

    const addToWishlist = async (e) => {
        const { value, name } = e.target
        const mes = { value, name, id: userId }

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
        const mes = { value, id: userId }
        const reqSettings = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mes)
        }
        const response = await fetch('http://localhost:5000/api/countries/wishlist', reqSettings)
        const data = await response.json()
        refreshWishlist(data)
    }

    const refreshWishlist = ((data) => {
        setWishlist(data)
        const price = data.map((country) => country.price * country.quantity)
        setTotalPrice(price.reduce((acc, cur) => acc + cur, 0))
    })

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