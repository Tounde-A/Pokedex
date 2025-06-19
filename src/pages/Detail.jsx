import { ItemImage } from "../components/PokemonCards/ItemImage";
import { pkmnImg } from "../API/PokedexApi";
import { svg } from "../API/PokedexApi";
import { useState, useEffect } from "react";
import { viewSinglePkmn } from "../API/PokedexApi";
import { NextPokemon, PrevPokemon } from "../components/PrevNext";
import { useNavigate, useParams } from "react-router";
import { ItemName } from "../components/PokemonCards/ItemName";
import { ItemType } from "../components/PokemonCards/ItemType";
import s from "../components/pokedex.module.css"

export const Detail = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [pokemonInfo, setPokemonInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await viewSinglePkmn(id);
            setPokemonInfo(data);
        };

        fetchData();
    }, [id]);

    const handleNext = () => {
        const nextId = parseInt(id) + 1;
        if (nextId <= 151) {
            navigate(`/pokemon/${nextId}`);
        }
    };

    const handlePrevious = () => {
        const prevId = parseInt(id) - 1;
        if (prevId >= 1) {
            navigate(`/pokemon/${prevId}`);
        }
    }

    const imgUrl = `${pkmnImg}${pokemonInfo.id}${svg}`;

    return (
        <div className={s['bg-img']}>
            <div>
                <PrevPokemon onClick={ handlePrevious } />
                <NextPokemon onClick={ handleNext } />
            </div>
            <ItemImage img={imgUrl} />
            <div>
                <ItemName number={''} name={pokemonInfo.name} />
                <ItemType types={pokemonInfo.types} />
            </div>
        </div>
    );
}