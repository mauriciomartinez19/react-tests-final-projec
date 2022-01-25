import { data } from "./data"
import './Home.css'

const PageCards = () => {
    return (
        <div className="card-home">{
            data.map((page) => {
                const { title, img, link, id } = page
                return (<a href={link} className="home-link" key={id}>
                    <img src={img} alt='preliminar-web-img' className="picture-home" />
                    <h5>{title}</h5>
                </a>)
            })
        }
        </div>
    )

}

export default PageCards