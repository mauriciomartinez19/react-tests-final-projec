import { useState, useContext } from "react"
import styled, { css } from "styled-components"
import WishlistContext from "./Context/WishlistContext"
import Card from "./card"

const Flag = ({ name, firstid, secid, uncode, population, price, School, Co2, PBI, lifeexp, Covid, FLAG_BASE_URI }) => {

    const [showFlag, setShowFlag] = useState(true)

    const wishlistContext = useContext(WishlistContext)

    return (<Card showFlag={showFlag}>
        {showFlag ?
            <FrontFlag
                turnFlag={() => setShowFlag(!showFlag)}
                addToWishlist={wishlistContext.addToWishlist}
                name={name}
                firstid={firstid}
                secid={secid}
                uncode={uncode}
                FLAG_BASE_URI={FLAG_BASE_URI}
            /> :
            <BackFlag
                turnFlag={() => setShowFlag(!showFlag)}
                name={name}
                firstid={firstid}
                secid={secid}
                uncode={uncode}
                FLAG_BASE_URI={FLAG_BASE_URI}
                price={price}
                population={population}
                School={School}
                Co2={Co2}
                PBI={PBI}
                Covid={Covid}
                lifeexp={lifeexp}
            />
        }
    </Card>)
}


const ImageContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 250px;
    height: 200px;
    border-bottom: solid black 1px;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 5px;
    align-items: center;
    height:110px;
    border-bottom: solid black 1px;
`

export default Flag

const FrontFlag = ({ turnFlag, addToWishlist, name, firstid, secid, uncode, FLAG_BASE_URI, showFlag }) => {
    return (<>
        <ImageContainer showFlag={showFlag} onClick={turnFlag}>
            <img src={`${FLAG_BASE_URI}${firstid}`} alt={name + ': flag'} className="flag" />
        </ImageContainer>
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
    </>
    )
}

const BackFlag = ({ turnFlag, showFlag, name, price, FLAG_BASE_URI, firstid, population, School, Co2, PBI, Covid, lifeexp }) => {
    return (<>
        <Header showFlag={showFlag} onClick={turnFlag}>
            <div className="price-box">
                <h1 className="name-reverse">{name}</h1>
                <div className="price-zone">
                    <h5 className="price">Price: </h5>
                    <p className="price-number">{'$ ' + price}</p>
                </div>
            </div>
            <img src={`${FLAG_BASE_URI}${firstid}`} alt={name + ': flag'} className="flag-reverse" />
        </Header>
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
                <button onClick={turnFlag}>Back to flag</button>
            </div>
        </div>
    </>
    )
}