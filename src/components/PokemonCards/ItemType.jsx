import { getTypeColor } from "../../assets/utils/utils";
import s from "../../components/pokedex.module.css"

/* 
Display this app type of pokemon with a colour system assigned to each type.
*/

export const ItemType = ({ types }) => {

    return (
        <div className={ s.typePkmn }>
            {types?.map((type, index) => { 
            const color = getTypeColor(type); 
            return (
                <span style={{ backgroundColor: color }} key={ index }>{ type }</span>
            );
            })}
        </div>
    );
}