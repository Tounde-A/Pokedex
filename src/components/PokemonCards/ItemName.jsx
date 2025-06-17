export const ItemName = ({ number, name }) => {
    return (
        <>
            <span>{ `#${ number } ${ name }` }</span>
        </>
    );
}