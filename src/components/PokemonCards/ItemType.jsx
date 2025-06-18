import { getTypeColor } from "../../assets/utils/utils";

export const ItemType = ({ types }) => {

    return (
        <>
            {types.map((type, index) => { 
            const color = getTypeColor(type); 
            return (
                <span style={{ backgroundColor: color }} key={ index }>{ type }</span>
            );
            })}
        </>
    );
}