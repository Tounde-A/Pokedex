import { ItemImage } from "./ItemImage";
import { ItemName } from "./ItemName";
import { ItemType } from "./ItemType";

/* 
Display this app one pokemon card item.
*/

export const ItemCard = ({ url, alt, id, name, element, onClick }) => {

    return (
        <li onClick={() => onClick(id)}>
            <ItemImage img={ url } name={ `Pokemon picture ${alt}` }/>
            <ItemName number={ `#${id}` } name={ name } />
            <ItemType types={ element } />
        </li>
    );
}