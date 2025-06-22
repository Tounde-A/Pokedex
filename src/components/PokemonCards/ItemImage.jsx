/* 
Display this app image of pokemon.
*/

export const ItemImage = ({ img, alt }) => {
    return (
        <>
            <img src={ img } alt={ alt } />
        </>
    );
}