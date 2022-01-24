import './center.css'
import arrow from './images/down-arrow.png'

const Center = () => {
    return <>
        <div className="back-container">
            <div className='learning-text-box'>
                <h1 className='learning-text'>PROJECTS</h1>
            </div>
            <div className='scroll-down'>
                <a href='#pagecards'>
                    <img src={arrow} alt='scroll-down-arrow' className='scroll-down-arrow' />
                </a>
            </div>
        </div>
    </>
}


export default Center