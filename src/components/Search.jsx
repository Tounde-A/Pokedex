/* 
Display this app searchBar filtered list of pokemon.
*/

export const Search = ({ onSearch }) => {
    return (
        <>
            <label htmlFor="search">Search Filter</label>
            <input
                id="search"
                name="search"
                type="search"
                placeholder="Filter the pokemon list, ex: pikachu..."
                onChange={ (e) => onSearch(e.target.value) }
            />
        </>
    );
}