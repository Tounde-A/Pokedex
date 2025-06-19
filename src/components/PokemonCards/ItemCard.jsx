import { ItemImage } from "./ItemImage";
import { ItemName } from "./ItemName";
import { ItemType } from "./ItemType";
import { pkmnImg } from "../../API/PokedexApi";
import { svg } from "../../API/PokedexApi";

export const ItemCard = ({ url, alt, id, name, element, onClick }) => {

    return (
        <div onClick={() => onClick(id)}>
            <ItemImage img={ url } name={ `Pokemon picture ${alt}` }/>
            <ItemName number={ `#${id}` } name={ name } />
            <ItemType types={ element } />
        </div>
    );
}