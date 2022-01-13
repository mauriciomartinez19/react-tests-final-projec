import { useState } from "react"

const FLAG_BASE_URI = 'https://countryflagsapi.com/png/'
const Flag = ({ name, firstid, secid, uncode, population, price, School, Co2, PBI, lifeexp, Covid }) => {
    const [showFlag, setShowFlag] = useState(true)
    if (showFlag) {
        return (<section className="country">
            <div className="flag-box" onClick={() => setShowFlag(!showFlag)}>
                <img src={`${FLAG_BASE_URI}${firstid}`} alt={name + ': flag'} className="flag" />
            </div>
            <h1 className="name">{name}</h1>
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
        </section>)
    }
    return (
        <section className="country">
            <div className="flag-box" onClick={() => setShowFlag(!showFlag)}>
                <img src={`${FLAG_BASE_URI}${firstid}`} alt={name + ': flag'} className="flag-reverse" />
                <h1 className="name-reverse">{name}</h1>
                <div className="sub-title">
                    <h5 className="tag">Price: </h5>
                    <p>{price}</p>
                </div>
            </div>
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
                    <p>{PBI}</p>
                </div>
                <div className="sub-title">
                    <h5 className="tag">Life expectation: </h5>
                    <p>{lifeexp}</p>
                </div>
                <div className="sub-title">
                    <h5 className="tag">Covid cases: </h5>
                    <p>{Covid}</p>
                </div>
            </div>
        </section>
    )
}

export default Flag