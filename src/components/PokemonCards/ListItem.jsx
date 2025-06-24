import { ItemCard } from "./ItemCard";
import { pkmnImg } from "../../API/PokedexApi";
import { svg } from "../../API/PokedexApi";
import { useNavigate } from "react-router";

/* 
Display this app list of pokemon item and redirect to the detail page when clicked on.
*/

export const ListItem = ({ list, className }) => {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/pokemon/${id}`);
    };

    return (
        <ul className={ className }>
            {list.map((pokemon, index) => {
                const imgUrl = `${pkmnImg}${pokemon.id}${svg}`;
                return (
                <ItemCard
                    key={ index }
                    id={ pokemon.id }
                    name={ pokemon.name }
                    url={ imgUrl }
                    alt={ pokemon.name }
                    element={ pokemon.types }
                    onClick={ handleClick }
                />
            );
            })}
        </ul>
    );
}