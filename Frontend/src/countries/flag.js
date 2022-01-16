import { useState, useContext } from "react"
import styled, { css } from "styled-components"
import WishlistContext from "./Context/WishlistContext"
import Card from "./card"

const Flag = ({ name, firstid, secid, uncode, population, price, School, Co2, PBI, lifeexp, Covid, FLAG_BASE_URI }) => {
    const [showFlag, setShowFlag] = useState(true)

    const wishlistContext = useContext(WishlistContext)

    if (showFlag) {
        return (<Card showFlag={showFlag}>
            <FlagBox showFlag={showFlag} onClick={() => setShowFlag(!showFlag)}>
                <img src={`${FLAG_BASE_URI}${firstid}`} alt={name + ': flag'} className="flag" />
            </FlagBox>
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
                <button className="cart-btn" value={uncode} onClick={(e) => wishlistContext.addToWishlist(e)}>Add to wishlist</button>
            </div>
        </Card>)
    }
    return (
        <Card showFlag={showFlag}>
            <FlagBox showFlag={showFlag} onClick={() => setShowFlag(!showFlag)}>
                <div className="price-box">
                    <h1 className="name-reverse">{name}</h1>
                    <div className="price-zone">
                        <h5 className="price">Price: </h5>
                        <p className="price-number">{'$ ' + price}</p>
                    </div>
                </div>
                <img src={`${FLAG_BASE_URI}${firstid}`} alt={name + ': flag'} className="flag-reverse" />
            </FlagBox>
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
        </Card>
    )
}

const FlagBox = styled.div`
    display: flex;
    justify-content: ${props => props.showFlag ? 'center' : 'space-between'};
    ${props => props.showFlag && css`
        align - items: center;
        width: 250px;
    `}

    ${props => !props.showFlag && css`
        flex-direction: row;
        padding: 5px;
    `}
    align-items: center;
    height: ${props => props.showFlag ? '200px' : '110px'};
    border-bottom: solid black 1px;
`


export default Flag