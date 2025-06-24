import { ItemReview } from "./ItemReview";
import s from "../../components/pokedex.module.css"

/* 
Display this app list of item review.
*/

export const ListItemReview = ({ list, onUpdate }) => {
    return (
        <ul className={ s.listReview }>
            {list.map((review, index) => {
                return (
                    <ItemReview
                        key={ index }
                        id={ review.id }
                        pokemonId={ review.pokemonId }
                        author={ review.author }
                        content={ review.content }
                    />
                );
            })}
        </ul>
    );
}