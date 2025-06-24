import s from "../../components/pokedex.module.css"

/* 
Display this app title with input for add a new user review with deflaut author: Me.
*/

export const AddReview = ({ title, value, onChange, onKeyDown }) => {
    return (
        <div className={ s.newReview }>
            <h2>{ title }</h2>
            <label className={ s.srOnly } htmlFor="review">Add Review</label>
            <input
                id="review"
                name="review"
                type="text"
                value={ value }
                placeholder="Add a review..."
                onChange={ (e) => onChange(e.target.value) }
                onKeyDown={ onKeyDown }
            />
        </div>
    );
}