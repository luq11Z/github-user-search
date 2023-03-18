import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <h1 className='home-main-text'>
            Desafio do Capítulo 3, <br /> Bootcamp DevSuperior
        </h1>
        <div className="home-secondary-text">
            <p> Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.  </p>
            <p>Favor observar as instruções passadas no capítulo sobre <br /> a elaboração deste projeto.</p>
            <p>Este design foi adaptado a partir de Ant Design System for Figma, de <br /> Mateusz Wierzbicki: <span className='email'>antforfigma@gmail.com</span></p>
        </div>
        <div className='home-btn'>
            <Link to="/search">
                <Button text='Começar'/>
            </Link>
        </div>
    </div>
);

export default Home;