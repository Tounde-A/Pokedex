import s from "../../components/pokedex.module.css"
/* 
Display this app name with number pokemon.
*/

export const ItemName = ({ number, name }) => {
    return (
        <div className={ s.namePkmn }>
            <span>{ `${ number } ${ name }` }</span>
        </div>
    );
}