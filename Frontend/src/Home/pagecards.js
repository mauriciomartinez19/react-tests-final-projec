import { data } from "./data"
import './Home.css'
import { Link } from "react-router-dom"

const PageCards = () => {
    return (
        <div className="card-home">{
            data.map((page) => {
                const { title, img, link, id } = page
                return (<Link to={link} className="home-link" key={id}>
                    <img src={img} alt='preliminar-web-img' className="picture-home" />
                    <h5>{title}</h5>
                </Link>)
            })
        }
        </div>
    )

}

export default PageCards