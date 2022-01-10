const Navbar = ({ selectType }) => {
    return (
        <div className='select-bar'>
            <button className='select-item' name='all' onClick={(e) => selectType(e)} >All</button>
            <button className='select-item' name='Breakfast' onClick={(e) => selectType(e)} >Breakfast</button>
            <button className='select-item' name='Lunch' onClick={(e) => selectType(e)} >Lunch</button>
            <button className='select-item' name='Shakes' onClick={(e) => selectType(e)} >Shakes</button>
        </div>
    )
}

export default Navbar