export const ItemType = ({ types }) => {
    return (
        <>
            {types.map((type, index) => (
                <span key={ index }>{ type }</span>
            ))}
        </>
    );
}