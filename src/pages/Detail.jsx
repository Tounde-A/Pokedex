import { ItemImage } from "../components/PokemonCards/ItemImage";
import { addReviews, pkmnImg, viewSingleReview } from "../API/PokedexApi";
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
import { AddReview } from "../components/Reviews/AddReview";
import { ListItemReview } from "../components/Reviews/ListItemReview";

export const Detail = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [pokemonStat, setPokemonStat] = useState([]);
    const [likeCount, setLikeCount] = useState([]);
    const [userReview, setUserReview] = useState([]);
    const [textReview, setTextReview] = useState('');

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
            const data = await viewSingleReview(id);
            setUserReview(data);
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
        const newCount = likeCount + 1;
        await updateSinglePkmn(id, {like: newCount});
        setLikeCount(newCount);
    };

    const handleAddReview = async () => {
        if (textReview.trim() === '') {
            return;
        }

        if ( textReview.length > 100) {
            return window.alert('Review must be 100 characters or fewer.');
        }

        const name = 'Me';
        const newReview = { 
            id: crypto.randomUUID(),
            author: name,
            content: textReview,
            pokemonId: pokemonInfo.id
        }

        await addReviews( newReview );
        setUserReview(prev => [...prev, newReview]);
        setTextReview('');
    }

    const imgUrl = `${pkmnImg}${pokemonInfo.id}${svg}`;

    return (
        <section className={s['bg-img']}>
            <nav>
                <ul>
                    <PrevPokemon onClick={ handlePrevious } />
                    <NextPokemon onClick={ handleNext } />
                </ul>
            </nav>
            <ItemImage img={imgUrl} />
            <div>
                <ItemName
                    number={''}
                    name={ pokemonInfo.name }
                />
                <ItemType types={ pokemonInfo.types } />
            </div>
            <ProgressBar stats={ pokemonStat } />
            <div>
                <LikeCount
                    count={ likeCount }
                    onClick={ handleLike }
                />
                <AddReview
                    title={'Review'}
                    value={ textReview }
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleAddReview();
                        }
                    }}
                    onChange={ setTextReview }
                />
                <ListItemReview list={ userReview } />
            </div>
        </section>
    );
}