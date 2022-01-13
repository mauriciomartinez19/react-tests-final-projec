const Flag = ({ name, firstid, secid }) => {
    return (<section className="country">
        <div className="flag-box">
            <img src={`https://countryflagsapi.com/png/${firstid}`} alt={name + ': flag'} className="flag" />
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
                <p>{secid}</p>
            </div>
        </div>
    </section>)
}

export default Flag