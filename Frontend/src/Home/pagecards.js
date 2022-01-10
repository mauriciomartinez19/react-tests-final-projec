import { data } from "./data"
import './Home.css'
import { Link } from "react-router-dom"

const PageCards = () => {
    return (
        <div className="card-home">{
            data.map((page) => {
                const { title, img, link } = page
                return (<Link to={link} className="home-link">
                    <img src={require(`./images/${img}`)} className="picture-home" />
                    <h5>{title}</h5>
                </Link>)
            })
        }
        </div>
    )

}

export default PageCards