import s from "../components/pokedex.module.css"
/* 
Display this app searchBar filtered list of pokemon.
*/

export const Search = ({ onSearch }) => {
    return (
        <div className={ s.searchContent }>
            <label className={ s.srOnly } htmlFor="search">Search Filter</label>
            <input
                className={ s.searchBar }
                id="search"
                name="search"
                type="search"
                placeholder="Filter the pokemon list, ex: pikachu..."
                onChange={ (e) => onSearch(e.target.value) }
            />
        </div>
    );
}