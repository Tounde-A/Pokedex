import { getTypeColor } from "../../assets/utils/utils";

/* 
Display this app type of pokemon with a colour system assigned to each type.
*/

export const ItemType = ({ types }) => {

    return (
        <>
            {types?.map((type, index) => { 
            const color = getTypeColor(type); 
            return (
                <span style={{ backgroundColor: color }} key={ index }>{ type }</span>
            );
            })}
        </>
    );
}