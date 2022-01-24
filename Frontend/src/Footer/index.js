import './footer.css'
import { footerImage } from './footerImage'

const Footer = () => {
    return <footer className='footer-box'>
        <div className='footer-bot-box'>
            <div className='my-name-box'>
                <h2 className='my-name'>Mauricio Martinez</h2>
                <h5 className='my-email'>maurimar19@hotmail.com </h5>
            </div>
            <div className='center-footer'>
                <div className='icons-social-media-box'>
                    {
                        footerImage.map(image => {
                            const { imageUrl, link, alt } = image
                            return <a href={link} key={alt}>
                                <img src={imageUrl} alt={alt} className='media-icons' />
                            </a>
                        })
                    }
                </div>
                <div className='links-footer'>
                    <a href='/'>Home</a>
                    <a href='/contact'>Contact</a>
                </div>
            </div>
            <div className='arrow-icon-footer'>
                <a href='#top'>
                    <img src='./images/homePage/down-arrow.png' alt='scroll-down-arrow' className='scroll-up-arrow' />
                </a>
            </div>
        </div>
    </footer>
}

export default Footer