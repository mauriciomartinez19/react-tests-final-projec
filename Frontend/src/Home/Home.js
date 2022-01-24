import './Home.css';
import PageCards from './pagecards';
import Center from './center';

const Home = () => {
    return <div className='home-page'>
        <Center />
        <div className='card' id='pagecards' >
            <h1 className='mern-stack-title'>MERN Stack Projects</h1>
            <PageCards />
        </div>

    </div>
}

export default Home