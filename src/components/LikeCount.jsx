import { LucideHeart } from "lucide-react";

/* 
Display this app like counter when clicked on add 1 like.
*/

export const LikeCount = ({ count, onClick }) => {
    return (
        <span>
            <LucideHeart style={{ fill: '#e44d39', stroke: 'none' }} onClick={ onClick } />
            { count }
        </span>
    );
}