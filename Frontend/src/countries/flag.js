import { useState } from "react"

const FLAG_BASE_URI = 'https://countryflagsapi.com/png/'
const Flag = ({ name, firstid, secid, uncode, population, price, School, Co2, PBI, lifeexp, Covid }) => {
    const [showFlag, setShowFlag] = useState(true)

    const addToWishlist = async (e) => {
        const { value } = e.target
        const mes = { value }
        console.log(mes)

        const reqSettings = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mes)
        }
        const response = await fetch('http://localhost:5000/api/countries/wishlist', reqSettings)
        const data = await response.json()
        console.log(data)
    }

    if (showFlag) {
        return (<section className="country">
            <div className="flag-box" onClick={() => setShowFlag(!showFlag)}>
                <img src={`${FLAG_BASE_URI}${firstid}`} alt={name + ': flag'} className="flag" />
            </div>
            <div className="name-box">
                <h1 className="name">{name}</h1>
            </div>
            <div className="botton-zone">
                <div className="text-zone">
                    <div className="sub-title">
                        <h5 className="tag">ISO Alpha-2: </h5>
                        <p>{firstid}</p>
                    </div>
                    <div className="sub-title">
                        <h5 className="tag">ISO Alpha-3:  </h5>
                        <p>{secid}</p>
                    </div>
                    <div className="sub-title">
                        <h5 className="tag">UN code: </h5>
                        <p>{uncode}</p>
                    </div>
                </div>
                <button className="cart-btn" value={uncode} onClick={(e) => addToWishlist(e)}>Add to wishlist</button>
            </div>
        </section>)
    }
    return (
        <section className="country">
            <div className="flag-box-reverse" onClick={() => setShowFlag(!showFlag)}>
                <div className="price-box">
                    <h1 className="name-reverse">{name}</h1>
                    <div className="price-zone">
                        <h5 className="price">Price: </h5>
                        <p className="price-number">{'$ ' + price}</p>
                    </div>
                </div>
                <img src={`${FLAG_BASE_URI}${firstid}`} alt={name + ': flag'} className="flag-reverse" />
            </div>
            <div className="botton">
                <div className="text-zone-reverse">
                    <div className="sub-title">
                        <h5 className="tag">Population: </h5>
                        <p>{population}</p>
                    </div>
                    <div className="sub-title">
                        <h5 className="tag">School enrollament:  </h5>
                        <p>{School}</p>
                    </div>
                    <div className="sub-title">
                        <h5 className="tag">Co2 contamination: </h5>
                        <p>{Co2}</p>
                    </div>
                    <div className="sub-title">
                        <h5 className="tag">PBI: </h5>
                        <p>{'$ ' + PBI}</p>
                    </div>
                    <div className="sub-title">
                        <h5 className="tag">Life expectation: </h5>
                        <p>{lifeexp + ' years'}</p>
                    </div>
                    <div className="sub-title">
                        <h5 className="tag">Covid cases: </h5>
                        <p>{Covid}</p>
                    </div>
                </div>
                <div className="btn-div">
                    <button onClick={() => setShowFlag(!showFlag)}>Back to flag</button>
                </div>
            </div>
        </section>
    )
}

export default Flag