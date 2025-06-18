import { useState } from "react";
import { ItemCard } from "./ItemCard";
import { useEffect } from "react";
import { viewAllPkmn } from "../../API/PokedexApi";
import { pkmnImg } from "../../API/PokedexApi";
import { svg } from "../../API/PokedexApi";

export const ListItem = ({ list }) => {
    return (
        <>
            {list.map((pokemon, index) => {
                const imgUrl = `${pkmnImg}${pokemon.id}${svg}`;
                return (
                <ItemCard
                    key={ index }
                    id={ pokemon.id }
                    name={ pokemon.name }
                    url={ imgUrl }
                    alt={ pokemon.name }
                    element={ pokemon.types }
                />
            );
            })}
        </>
    );
}