import { LucideHeart } from "lucide-react";

export const LikeCount = ({ count, onClick }) => {
    return (
        <span>
            <LucideHeart style={{ fill: '#e44d39', stroke: 'none' }} onClick={ onClick } />
            { count }
        </span>
    );
}