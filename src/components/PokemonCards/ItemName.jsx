/* 
Display this app name with number pokemon.
*/

export const ItemName = ({ number, name }) => {
    return (
        <>
            <span>{ `${ number } ${ name }` }</span>
        </>
    );
}