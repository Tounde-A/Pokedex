import { ItemReview } from "./ItemReview";

/* 
Display this app list of item review.
*/

export const ListItemReview = ({ list, onUpdate }) => {
    return (
        <ul>
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