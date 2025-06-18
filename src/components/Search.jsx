export const Search = ({ onSearch }) => {
    return (
        <>
            <input
                type="text"
                placeholder="Filter the pokemon list, ex: pikachu..."
                onChange={(e) => onSearch(e.target.value)}
            />
        </>
    );
}