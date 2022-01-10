import './Home.css';
import PageCards from './pagecards';

const Home = () => {
    return <div className='home-page'>
        <br />
        <h1 className='react-testing'>React Testing to Learn</h1>
        <article className='card'>
            <PageCards />
        </article>

    </div>
}

export default Home