import { LucideArrowBigRight } from "lucide-react";
import { LucideArrowBigLeft } from "lucide-react";
import { Link } from "react-router";

export const PrevPokemon = ({ onClick }) => {
    return (
        <>
            <LucideArrowBigLeft onClick={ onClick } />
        </>
    );
}

export const NextPokemon = ({ onClick }) => {
    return (
        <>
            <LucideArrowBigRight onClick={ onClick } />
        </>
    );
}