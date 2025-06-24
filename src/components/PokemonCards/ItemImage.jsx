import s from "../../components/pokedex.module.css"
/* 
Display this app image of pokemon.
*/

export const ItemImage = ({ img, alt, className }) => {
    return (
        <>
            <img className={ className } src={ img } alt={ alt } />
        </>
    );
}