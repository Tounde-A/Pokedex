import { LucideArrowBigRight } from "lucide-react";
import { LucideArrowBigLeft } from "lucide-react";

/* 
Display this app navigation and redirect to prev and next pokemon when clicked on.
*/

export const PrevPokemon = ({ onClick }) => {
    return (
        <li>
            <LucideArrowBigLeft onClick={ onClick } />
        </li>
    );
}

export const NextPokemon = ({ onClick }) => {
    return (
        <li>
            <LucideArrowBigRight onClick={ onClick } />
        </li>
    );
}