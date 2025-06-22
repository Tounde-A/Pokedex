import { ListItem } from "../components/PokemonCards/ListItem";
import { Search } from "../components/Search";
import { viewAllPkmn } from "../API/PokedexApi";
import { useState, useEffect } from "react";

export const Home = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await viewAllPkmn();
            setPokemonList(data);
        };

        fetchData();
    }, []);

    const filteredList = pokemonList.filter((pokemon) => {
        const pokemonName = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
        const pokemonType = pokemon.types.some((type) => type.toLowerCase().includes(searchTerm.toLowerCase()));

        return pokemonName || pokemonType;
    });

    return (
        <section>
            <div>
                <Search onSearch={setSearchTerm} />
            </div>
            {filteredList.length > 0 ? (
                <ListItem list={filteredList} />
            ) : (
                <p>Aucun résultat pour la recherche : "<strong>{searchTerm}</strong>"</p>
            )}
        </section>
    );
}