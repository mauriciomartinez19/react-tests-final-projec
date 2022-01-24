
import './Menu.css';



const Menu = ({ showFood }) => {
    return (<>
        <div>
            <div className='menu'>
                {showFood.map((food) => {
                    const { id, title, price, description, img } = food
                    return (
                        < section key={id} className='menu-section'>
                            <img className='picture-menu' src={img} alt='' />
                            <div className='menu-text'>
                                <div className='title-price'>
                                    <h4 className='menu-title'>{title}</h4>
                                    <h4 className='price'>{price}</h4>
                                </div>
                                <div className='menu-line' />
                                <p className='description'>{description}</p>
                            </div>
                        </section >
                    )
                })}
            </div>
        </div>
    </>)
}

export default Menu
