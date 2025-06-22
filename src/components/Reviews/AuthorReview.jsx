/* 
Display this app authors name to the review item.
*/

export const AuthorReview = ({ name }) => {
    return (
        <>
            <strong>Posted by : { name }</strong>
        </>
    );
}