import { ItemImage } from "../components/PokemonCards/ItemImage";
import { addReviews, pkmnImg } from "../API/PokedexApi";
import { svg } from "../API/PokedexApi";
import { useState, useEffect } from "react";
import { viewSinglePkmn } from "../API/PokedexApi";
import { NextPokemon, PrevPokemon } from "../components/PrevNext";
import { useNavigate, useParams } from "react-router";
import { ItemName } from "../components/PokemonCards/ItemName";
import { ItemType } from "../components/PokemonCards/ItemType";
import { ProgressBar } from "../components/ProgressBar";
import s from "../components/pokedex.module.css"
import { LikeCount } from "../components/LikeCount";
import { updateSinglePkmn } from "../API/PokedexApi";

export const Detail = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [pokemonStat, setPokemonStat] = useState([]);
    const [likeCount, setLikeCount] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await viewSinglePkmn(id);
            setPokemonInfo(data);
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await viewSinglePkmn(id);
            setPokemonStat(data.base);
            setLikeCount(data.like);
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await updateSinglePkmn(id);
            // setLikeCount(data);
            // console.log(data)
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

    const handleLike = async () => {
        const newCount = setLikeCount(prev => prev + 1);
        const updateLike = await updateSinglePkmn(id, newCount);
        updateLike;
    };

    const imgUrl = `${pkmnImg}${pokemonInfo.id}${svg}`;

    return (
        <div className={s['bg-img']}>
            <div>
                <PrevPokemon onClick={ handlePrevious } />
                <NextPokemon onClick={ handleNext } />
            </div>
            <ItemImage img={imgUrl} />
            <div>
                <ItemName number={''} name={ pokemonInfo.name } />
                <ItemType types={ pokemonInfo.types } />
            </div>
            <ProgressBar stats={ pokemonStat } />
            <LikeCount count={ likeCount } onClick={ handleLike } />
        </div>
    );
}