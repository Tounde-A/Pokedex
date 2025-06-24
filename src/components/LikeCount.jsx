import { LucideHeart } from "lucide-react";
import s from "../components/pokedex.module.css"

/* 
Display this app like counter when clicked on add 1 like.
*/

export const LikeCount = ({ count, onClick }) => {
    return (
        <span className={ s.likeCount }>
            <LucideHeart onClick={ onClick } />
            { count }
        </span>
    );
}