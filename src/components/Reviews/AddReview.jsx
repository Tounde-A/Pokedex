import { useState } from "react";

/* 
Display this app title with input for add a new user review with deflaut author: Me.
*/

export const AddReview = ({ title, value, onChange, onKeyDown }) => {
    return (
        <>
            <h2>{ title }</h2>
            <label htmlFor="review">Add Review</label>
            <input
                id="review"
                name="review"
                type="text"
                value={ value }
                placeholder="Add a review..."
                onChange={ (e) => onChange(e.target.value) }
                onKeyDown={ onKeyDown }
            />
        </>
    );
}