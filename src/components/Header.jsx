import { Link } from 'react-router';
import pokeball from '../assets/img/pokeball.png'
import pokedex from '../assets/img/pokedex.png'
import s from '../components/pokedex.module.css'
import { ROUTES } from '../config/routes';

/* 
Display this app logo and redirect to the home page when clicked on.
*/

export const Header = () => {
    return (
        <nav>
            <div className={s.header}>
                <Link className={s.logo} to={ROUTES.HOME}>
                    <img src={pokeball} alt="Logo pokeball" />
                    <img src={pokedex} alt="Logo pokedex" />
                </Link>
            </div>
        </nav>
    );
}