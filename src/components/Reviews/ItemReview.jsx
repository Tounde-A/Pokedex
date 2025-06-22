import { AuthorReview } from "./AuthorReview";

/* 
Display this app one item review.
*/

export const ItemReview = ({ content, author }) => {
    return (
        <li>
            <p>{ content }</p>
            <AuthorReview name={ author } />
        </li>
    );
}